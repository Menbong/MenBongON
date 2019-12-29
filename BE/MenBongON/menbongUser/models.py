from django.db import models

# Create your models here.
class MenbongUser(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    pw = models.CharField(max_length=10)
    name = models.CharField(max_length=20)
    school = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    major = models.CharField(max_length=50)
    phonenumber = models.IntegerField()