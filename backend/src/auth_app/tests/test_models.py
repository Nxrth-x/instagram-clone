from django.test import TestCase
from auth_app.models import CustomUser


class CustomUserTest(TestCase):
    def setUp(self):
        CustomUser.objects.create_user(
            username="eder", email="eder@mail.com", password="password1"
        )

    def test_custom_user_username(self):
        user = CustomUser.objects.get(username="eder")

        self.assertEqual(user.username, "eder", "Username must be 'eder'")

    def test_custom_user_email(self):
        user = CustomUser.objects.get(username="eder")

        self.assertEqual(user.username, "eder", "Email must be 'eder@mail.com'")

    def test_custom_user_password(self):
        user = CustomUser.objects.get(username="eder")

        self.assertNotEqual(
            user.password, "password1", "Password must not be 'password1'"
        )
