from django.contrib.auth.models import User
from rest_framework import serializers
from userprofile.models import CreateUserProfile

from django.contrib.auth import get_user_model



User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','first_name','last_name','email')
        extra_kwargs = {'password':{'write_only':True,'required':True}}
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        CreateUserProfile.objects.create(new_user=user)
        return user


class CreateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateUserProfile
        fields = ('new_user', 'user_image',)
        read_only_fields = ['new_user']

    def validate(self,attrs):
        attrs['new_user'] = self.context['request'].user
        return attrs

    def to_representation(self,instance):
        response = super().to_representation(instance)
        response['new_user'] = UserSerializer(instance.new_user).data
        return response