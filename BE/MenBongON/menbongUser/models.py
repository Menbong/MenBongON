from django.db import models

# Create your models here.
class MenbongUser(models.Model):
    id = models.CharField(max_length=20, primary_key=True)
    pw = models.CharField(max_length=20)
    menbong = models.CharField(max_length=20)
    name = models.CharField(max_length=20)
    school = models.CharField(max_length=40)
    email = models.CharField(max_length=50)
    major = models.CharField(max_length=50)
    phonenumber = models.IntegerField()