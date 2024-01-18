from django.db import models
from transaction.models import Transaction
from product.models import Product

# Create your models here.
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    transaction_id = models.ForeignKey(Transaction, on_delete=models.CASCADE, blank=True)
    quantity = models.IntegerField(blank=True)
    price = models.FloatField(blank=True)
    sale_price = models.FloatField(blank=True)
    total_price = models.FloatField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def placeOrder(self):
        self.save()

    @staticmethod
    def get_orders_by_transaction(trans_id):
        return Order.objects.filter(transaction_id=trans_id).values('id').first()

class Order_detail(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True, related_name='order_detail')
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    quantity = models.IntegerField(blank=True)
    sub_price = models.FloatField(blank=True)
    sale_price = models.FloatField(blank=True)
    total_price = models.FloatField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)