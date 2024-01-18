from django.db import models
# from bookstore.const import TRANS_STATUS
from user.models import User

# Create your models here.


class Transaction(models.Model):
    TRANS_STATUS = [
        ( 'PENDING', 'Chờ xác nhận'),
        ("CANCELED", 'Hủy'),
        ('REFUNED', 'Hủy đơn'),
        ('COMPLETED','Thành công')
    ]
    id = models.AutoField(primary_key=True)
    total_price = models.FloatField(blank=True)
    address = models.CharField(max_length=255, blank=True,null=True)
    status = models.CharField(choices=TRANS_STATUS, blank=True, max_length=20,null=True, default="PENDING")
    amount = models.IntegerField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True,null=True)
    note = models.CharField(max_length=255, blank=True,null=True)
    phone = models.CharField(max_length=15, blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    customer = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    fullname = models.CharField(max_length=255, null=True)

    
    def __str__(self):
        return self.id