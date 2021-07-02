from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    image = models.ImageField(default="default1.jpg")

    REQUIRED_FIELDS = ["username"]
    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"