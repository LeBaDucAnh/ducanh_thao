from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=2000, blank=True)
    images = models.TextField(max_length=2000, blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now=True)

    @staticmethod
    def get_all_categories():
        return Category.objects.all()