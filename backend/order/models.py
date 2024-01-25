from django.db import models
from product.models import Product

# Create your models here.
class Order(models.Model):
    id = models.AutoField(primary_key=True)
    products = models.ManyToManyField(Product, through='OrderItem')
    quantity = models.IntegerField(blank=True)
    price = models.FloatField(blank=True)
    sale_price = models.FloatField(blank=True)
    total_price = models.FloatField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.id

class OrderItem(models.Model):
    id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, blank=True, related_name='order_detail')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True)
    quantity = models.IntegerField(blank=True)
    sub_price = models.FloatField(blank=True)
    sale_price = models.FloatField(blank=True)
    total_price = models.FloatField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.subtotal = self.product.sale_price * self.quantity
        super().save(*args, **kwargs)