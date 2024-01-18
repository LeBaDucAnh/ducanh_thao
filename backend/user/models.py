from django.db import models

class User(models.Model):
    
    id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=255, blank=True,null=True)
    email = models.CharField(max_length=255, blank=True,null=True)
    phone = models.CharField(max_length=15, blank=True,null=True)
    fullname = models.CharField(max_length=255, null=True)
    shipping_address = models.CharField(max_length=255, blank=True,null=True)
    date = models.DateField()
    
    def __str__(self):
        return self.fullname