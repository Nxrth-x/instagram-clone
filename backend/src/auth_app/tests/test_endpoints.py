from django.urls import reverse
from rest_framework.test import APITestCase

from auth_app.models import CustomUser


class TestUserRegistrationEndpoint(APITestCase):
    valid_data: dict = {
        "username": "eder",
        "email": "eder@mail.com",
        "first_name": "Eder",
        "last_name": "Lima",
        "password": "sEnha_123",
    }

    valid_data_expected_response: dict = {
        "username": "eder",
        "email": "eder@mail.com",
        "first_name": "Eder",
        "last_name": "Lima",
    }

    invalid_data: dict = {
        "usernme": "eder",
        "emal": "@mail.com",
        "first_nme": "Eder",
        "las_name": "Lima",
        "pasword": "sEnha_123",
    }

    invalid_data_expected_response: dict = {
        "email": [
            "This field is required.",
        ],
        "password": [
            "This field is required.",
        ],
        "username": [
            "This field is required.",
        ],
    }

    def test_a_valid_user_registration(self):
        response = self.client.post(reverse("user_registration"), self.valid_data)

        response_json = response.json()

        self.assertEqual(
            response.status_code, 201, "Status code should be '201' (CREATED)"
        )
        self.assertDictEqual(
            response_json,
            self.valid_data_expected_response,
            "Response data should be the same as the expected response",
        )

    def test_an_invalid_user_registration(self):
        response = self.client.post(reverse("user_registration"), self.invalid_data)

        response_json = response.json()

        self.assertEqual(
            response.status_code, 400, "Status code should be '400' (BAD REQUEST)"
        )
        self.assertDictEqual(
            response_json,
            self.invalid_data_expected_response,
            "Response data should be the same as the expected response",
        )


class TestTokenObtainPairEndpoint(APITestCase):
    valid_login_data: dict = {
        "email": "admin@mail.com",
        "password": "password1",
    }

    invalid_login_data: dict = {
        "emai": "admin@mail.com",
        "pasword": "password1",
    }

    invalid_login_data_expected_response: dict = {
        "email": [
            "This field is required.",
        ],
        "password": [
            "This field is required.",
        ],
    }

    invalid_password_login_data: dict = {
        "email": "admin@mail.com",
        "password": "password",
    }

    invalid_password_login_data_expected_response: dict = {
        "detail": "No active account found with the given credentials",
    }

    def setUp(self) -> None:
        CustomUser.objects.create_user(
            username="admin", email="admin@mail.com", password="password1"
        )

    def test_get_token_with_valid_login_data(self):
        response = self.client.post(reverse("token_obtain_pair"), self.valid_login_data)

        response_json = response.json()

        self.assertEqual(response.status_code, 200, "Status code should be '200' (OK)")
        self.assertIn("access", response_json, "Response must contain a 'access' field")
        self.assertIn(
            "refresh", response_json, "Response must contain a 'refresh' field"
        )

    def test_get_token_with_invalid_login_data(self):
        response = self.client.post(
            reverse("token_obtain_pair"), self.invalid_login_data
        )

        response_json = response.json()

        self.assertEqual(
            response.status_code, 400, "Status code should be '400' (BAD REQUEST)"
        )
        self.assertDictEqual(
            response_json,
            self.invalid_login_data_expected_response,
            "Response must be the same, containing 'email' and 'password' errors",
        )

    def test_get_token_with_invalid_password_login_data(self):
        response = self.client.post(
            reverse("token_obtain_pair"), self.invalid_password_login_data
        )

        response_json = response.json()

        self.assertEqual(
            response.status_code, 401, "Status code should be '401' (UNAUTHORIZED)"
        )
        self.assertDictEqual(
            response_json,
            self.invalid_password_login_data_expected_response,
            "Response must be the same, containing a field named 'detail'",
        )


class TestTokenRefreshEndpoint(APITestCase):
    refresh_token: str

    def setUp(self):
        CustomUser.objects.create_user(
            username="admin", email="admin@mail.com", password="password1"
        )

        response = self.client.post(
            reverse("token_obtain_pair"),
            {"email": "admin@mail.com", "password": "password1"},
        )

        response_json = response.json()

        self.refresh_token = response_json["refresh"]

    def test_get_refresh_token_with_valid_data(self):
        response = self.client.post(
            reverse("token_refresh"),
            {
                "refresh": self.refresh_token,
            },
        )

        response_json = response.json()

        self.assertEqual(response.status_code, 200, "Status code should be '200' (OK)")
        self.assertIn(
            "access", response_json, "Response should contain an 'access' key"
        )

    def test_get_refresh_token_with_invalid_data(self):
        response = self.client.post(
            reverse("token_refresh"),
            {
                "refresh": "hello, world!",
            },
        )

        response_json = response.json()

        self.assertEqual(
            response.status_code, 401, "Status code should be '401' (UNAUTHORIZED)"
        )
        self.assertIn(
            "detail",
            response_json,
            "Response should contain a 'detail' key, indicating the error",
        )

    def test_get_refresh_token_with_no_data(self):
        response = self.client.post(
            reverse("token_refresh"),
        )

        response_json = response.json()

        self.assertEqual(
            response.status_code, 400, "Status code should be '400' (BAD REQUEST)"
        )
        self.assertIn(
            "refresh",
            response_json,
            "Response should contain a 'refresh' key, indicating that the refresh token must be sent",
        )
