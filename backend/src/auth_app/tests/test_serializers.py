from django.test import TestCase

from auth_app.api.serializers import CustomUserRegistrationSerializer
from auth_app.models import CustomUser


class TestCustomUserRegistrationSerializer(TestCase):
    def setUp(self):
        CustomUser.objects.create_user(
            username="eder",
            email="eder@mail.com",
            password="password1",
            first_name="Eder",
            last_name="Lima",
        )

    def test_serializer_data(self):
        user = CustomUser.objects.get(username="eder")
        serializer = CustomUserRegistrationSerializer(user)

        self.assertDictEqual(
            serializer.data,
            {
                "username": "eder",
                "email": "eder@mail.com",
                "first_name": "Eder",
                "last_name": "Lima",
            },
            "Both users dict should be the same and must not include the user's password",
        )
