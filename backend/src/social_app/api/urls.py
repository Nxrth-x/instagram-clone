from django.urls import path, include
from social_app.api import views

urlpatterns = [
    path("posts/", views.PostListAPIView.as_view(), name="post-list"),
    path("posts/<str:pk>", views.PostDetailAPIView.as_view(), name="post-detail"),
    path(
        "posts/<str:post_id>/comments/",
        views.CommentCreateAPIView.as_view(),
        name="comment-create",
    ),
]
