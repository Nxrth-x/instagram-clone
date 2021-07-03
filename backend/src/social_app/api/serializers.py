from rest_framework import serializers

from social_app.models import Post, Comment, Like
from auth_app.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "image",
        ]


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)
    likes = serializers.SerializerMethodField()
    liked = serializers.SerializerMethodField()

    def get_likes(self, instance: Post) -> int:
        likes_count = Like.objects.filter(post=instance).count()

        return likes_count

    def get_liked(self, instance: Post) -> bool:
        user = None
        request = self.context.get("request")

        if request and hasattr(request, "user"):
            user = request.user

        if not user:
            return False

        likes_queryset = Like.objects.filter(post=instance, user=user)

        return likes_queryset.exists()

    class Meta:
        model = Post
        fields = [
            "id",
            "image",
            "description",
            "location",
            "user",
            "comments",
            "likes",
            "liked",
        ]
