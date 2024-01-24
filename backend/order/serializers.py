from rest_framework.serializers import ModelSerializer
from .models import *
from product.serializers import ProductSerializer

class OrderItemSerializer(ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'