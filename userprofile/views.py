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


class UserProfileUpdateView(views.APIView):
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated,]
    def post(self, request):
        try:
            user = request.user
            data = request.data
            user_objects = User.objects.get(username=user)
            user_objects.first_name = data['first_name']
            user_objects.last_name = data['last_name']
            user_objects.email = data['email']
            user_objects.save()
            return Response("User Profile Update", status = status.HTTP_200_OK)
        except Exception as error:
            return Response(error, status=status.HTTP_400_BAD_REQUEST)


class UserProfileImageUpdateView(views.APIView):
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated,]
    def post(self, request):
        try:
            user = request.user
            user_objects = CreateUserProfile.objects.get(new_user=user)
            data = request.data
            return data
            serializers = CreateProfileSerializer(user_objects, data=data, context={"request": request})
            serializers.is_valid(raise_exception=True)
            serializers.save()
            return Response("Image Update", status = status.HTTP_200_OK)
        except Exception as error:
            return Response(error, status=status.HTTP_400_BAD_REQUEST)













