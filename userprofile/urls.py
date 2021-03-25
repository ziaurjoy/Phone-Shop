
from django.urls import path
from userprofile.views import *

urlpatterns = [
    path('api/proflie/view', UserProfileView.as_view(), name='user-profile-view'),
]