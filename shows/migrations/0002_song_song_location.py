# Generated by Django 3.1.4 on 2021-01-23 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='song_location',
            field=models.CharField(default='', max_length=200),
        ),
    ]
