from django.urls import path
from .views.userView import UserLogin, UserRegister, UserList
from .views.blogView import BlogList, BlogPost, SingleBlogView, BlogListByAuthor, BlogUpdate

urlpatterns = [
    path('user/', UserList.as_view(), name='user-list'),
    path('user/login/', UserLogin.as_view(), name='user-login'),
    path('user/register/', UserRegister.as_view(), name='user-register'),
    path('blog/', BlogList.as_view(), name='BlogList'),
    path('single-blog/<int:pk>/', SingleBlogView.as_view(), name='single_blog_view'),
    path('blog/post/', BlogPost.as_view(), name='Blog post add by author'),
    path('blog/by-author/<int:author_id>/', BlogListByAuthor.as_view(), name='blog_list_by_author'),
    path('blog/update-single/<int:pk>/', BlogUpdate.as_view(), name='blog_list_by_author'),
    
]