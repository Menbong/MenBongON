from rest_framework import serializers
from . import models

class MenbongUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MenbongUser
        fields = '__all__'