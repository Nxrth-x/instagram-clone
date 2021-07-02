from rest_framework import generics

from auth_app.models import CustomUser
from auth_app.api.serializers import CustomUserRegistrationSerializer


class UserRegistrationView(generics.CreateAPIView):
    serializer_class = CustomUserRegistrationSerializer
    queryset = CustomUser.objects.all()
