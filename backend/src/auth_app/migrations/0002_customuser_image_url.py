# Generated by Django 3.2.4 on 2021-07-02 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='image_url',
            field=models.ImageField(default='https://fopiess.org.br/wp-content/uploads/2018/01/default1.jpg', upload_to=''),
        ),
    ]