# Generated by Django 3.1.7 on 2021-03-24 18:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='createuserprofile',
            old_name='user',
            new_name='new_user',
        ),
    ]