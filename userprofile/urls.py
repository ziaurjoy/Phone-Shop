
from django.urls import path
from userprofile.views import *

urlpatterns = [
    path('api/proflie/view', UserProfileView.as_view(), name='user-profile-view'),
    path('api/proflie/update/view/', UserProfileUpdateView.as_view(), name='user-profile-update-view'),
    path('api/proflie/update/image/view/', UserProfileImageUpdateView.as_view(), name='user-profile-update-image-view'),
]