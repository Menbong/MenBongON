from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

class MyInfoView(viewsets.ModelViewSet):
    queryset = models.MenbongUser.objects.all()
    serializer_class = serializers.MenbongUserSerializer
