from django.urls import path
from .views.userView import UserLogin, UserRegister, UserList

urlpatterns = [
    path('user/', UserList.as_view(), name='user-login'),
    path('user/login/', UserLogin.as_view(), name='user-login'),
    path('user/register/', UserRegister.as_view(), name='user-register'),
    
]