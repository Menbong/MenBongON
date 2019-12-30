from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

class MenbongUserView(viewsets.ModelViewSet):
    queryset = models.MenbongUser.objects.all()
    serializer_class = serializers.MenbongUserSerializer



def menbonguser(request, data):
    print("qweqwe11")
    if request.method == 'POST' :
        print("qweqwe")
        return render(request, 'index.js')