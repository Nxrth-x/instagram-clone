from rest_framework import generics, permissions

from social_app.models import Post, Comment
from social_app.api.serializers import CommentSerializer, PostSerializer

from social_app.api.permissions import IsCreatorOrReadOnly


class PostListAPIView(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

        return serializer


class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [IsCreatorOrReadOnly]


class CommentCreateAPIView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def perform_create(self, serializer):
        user = self.request.user

        post_id = self.kwargs.get("post_id")
        post = Post.objects.get(id=post_id)

        serializer.save(user=user, post=post)

        return serializer
