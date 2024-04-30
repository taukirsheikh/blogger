from django.urls import path
from .views import UserLogin, UserList

urlpatterns = [
    path('user/login/', UserLogin.as_view(), name='user-login'),
    path('user/register/', UserList.as_view(), name='user-register'),
    
]