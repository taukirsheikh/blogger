from rest_framework import generics 
from rest_framework.response import Response
from api.models import Blog
from api.serializers import BlogSerializer, BlogPostSerializer

class BlogList(generics.ListAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogSerializer

#singe blog view
class SingleBlogView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

#CRUD portion
class BlogPost(generics.CreateAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogPostSerializer

class BlogListByAuthor(generics.ListAPIView):
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        # Get the author ID from the URL parameter
        author_id = self.kwargs['author_id']
        queryset = Blog.objects.filter(author=author_id)
        
        return queryset

class BlogUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset=Blog.objects.all()
    serializer_class=BlogPostSerializer


