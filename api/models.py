from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    update = models.DateTimeField(auto_now=True)
    create = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.body[0:50] #0:50 mean body will take max 50 characters
    