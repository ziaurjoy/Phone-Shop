from django.shortcuts import render
from django.contrib.auth.models import User
from userprofile.models import *
from userprofile.serializer import *



from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.



class UserProfileView(views.APIView):

    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated,]

    def get(self, request):
        try:
            profile_query = CreateUserProfile.objects.get(new_user=request.user)
            serializer = CreateProfileSerializer(profile_query)
            return Response(serializer.data, status = status.HTTP_200_OK)
        except Exception as error:
            return Response(error, status=status.HTTP_400_BAD_REQUEST)









