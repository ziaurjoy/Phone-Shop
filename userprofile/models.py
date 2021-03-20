

from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class CreateUserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_image = models.ImageField(upload_to='users/')
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username
    