from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from social_app.models import Like, Post, Comment
from social_app.api.serializers import CommentSerializer, PostSerializer, LikeSerializer

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


class LikeCreateAPIView(APIView):
    def post(self, request, post_id):
        user = request.user
        post = Post.objects.get(pk=post_id)
        likes_queryset = Like.objects.filter(user=user, post=post)

        if likes_queryset.exists():
            like = Like.objects.get(user=user, post=post)
            like.delete()
            return Response({}, status=204)

        Like.objects.create(user=user, post=post)

        return Response(
            {
                "detail": "Successfully liked",
            },
            status=200,
        )

    def handle_exception(self, exc):
        if type(exc) == Post.DoesNotExist:
            return Response(
                {
                    "detail": "Post does not exist",
                },
                status=404,
            )

        return Response({"detail": "Internal server error"}, status=500)
