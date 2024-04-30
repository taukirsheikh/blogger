from django.shortcuts import render
from rest_framework import generics 
from rest_framework.response import Response
from api.models import User, Blog
from api.serializers import UserSerializer, UserLoginSerializer

# Create your views here.
class UserList(generics.ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
class UserRegister(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        email=request.data.get("email")
        if email:
            user_exist=User.objects.filter(email=email).first()
            if user_exist:
                 return Response({"message": "User with this email already exists."}, status=400)
        return super().create(request, *args, **kwargs)
    
class UserLogin(generics.GenericAPIView): 
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        email=request.data.get('email')
        password=request.data.get('password')
        user = User.objects.filter(email=email).first()
        if user is None:
            return Response({"error": "User not found"}, status=404)
        user= User.objects.filter(email=email, password=password).first()
        if user is None:
            return Response({"error": "Invalid password"}, status=404)
            
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=200)   
       
