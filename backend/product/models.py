from django.db import models
from category.models import Category

class Product(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=255, blank=True)
    sku = models.TextField(max_length=255, blank=True)
    brand = models.TextField(max_length=255, blank=True)
    material = models.TextField(max_length=255, blank=True)
    size = models.TextField(max_length=255, blank=True)
    function = models.TextField(max_length=255, blank=True)
    warranty = models.TextField(max_length=255, blank=True)
    quantity = models.IntegerField(blank=True, null=True)
    sold = models.IntegerField(blank=True, null=True)
    power_supply = models.TextField(max_length=255, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField(max_length=2000, blank=True)
    price = models.IntegerField(blank=True)
    sale_price = models.IntegerField(blank=True)
    images = models.TextField(max_length=2000, blank=True)
    videos = models.TextField(max_length=2000, blank=True)
    status = models.TextField(max_length=2000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.name
    
    