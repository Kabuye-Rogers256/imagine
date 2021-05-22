from django.db import models
from cloudinary.models import CloudinaryField


# Create your models here.
class Qout(models.Model):
    name = models.CharField(max_length=20, default='unknown')
    category = models.CharField(max_length=20, default='Undefined')
    image = CloudinaryField('media')
    qout = models.TextField()

    def __str__(self):
        return f'{self.name} {self.category}'
