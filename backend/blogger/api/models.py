from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100, unique=True)
    password=models.CharField(max_length=100)
    def __str__(self):
        return self.name


class Blog(models.Model):
    title=models.CharField(max_length=255)
    content=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    author=models.ForeignKey(User, on_delete=models.CASCADE, related_name="blogs")

    def __str__(self):
        return f"{self.title} - {self.author}"   
