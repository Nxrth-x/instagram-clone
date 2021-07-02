from django.contrib import admin

from social_app.models import Post, Comment


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "user",
        "description",
        "created_at",
        "updated_at",
    ]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "user",
        "content",
        "post",
        "created_at",
        "updated_at",
    ]
