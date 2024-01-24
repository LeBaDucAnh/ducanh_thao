# transactions/serializers.py
from rest_framework import serializers
from .models import Transaction
from order.serializers import OrderSerializer

class TransactionSerializer(serializers.ModelSerializer):
    order = OrderSerializer()

    class Meta:
        model = Transaction
        fields = '__all__'
