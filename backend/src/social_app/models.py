from django.db import models
from auth_app.models import CustomUser
from uuid import uuid4


def upload_image_to(instance, filename: str) -> str:
    return f"{instance.id}{filename}"


# Create your models here.
class Post(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    image = models.ImageField(upload_to=upload_image_to)
    description = models.CharField(max_length=255, default="")
    location = models.CharField(max_length=255, null=True, blank=True)

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.description


class Comment(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    content = models.CharField(max_length=255)

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
