# Generated by Django 3.2.4 on 2021-07-02 02:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth_app', '0002_customuser_image_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='image_url',
            new_name='image',
        ),
    ]
