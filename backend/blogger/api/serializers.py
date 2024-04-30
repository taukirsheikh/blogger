from rest_framework import serializers
from api.models import User, Blog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs={
            "password":{"write_only": True}
            }
        
class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['email','password']


class BlogSerializer(serializers.ModelSerializer):
    author=UserSerializer()
    class Meta:
        model= Blog
        fields='__all__'
        

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=['id','title','content','created_at','author']
        read_only_fields = ['author']
