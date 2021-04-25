from django.db import models


class Employee(models.Model):
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    role = models.ManyToManyField('shop.Role', blank=True, null=True)
    dni = models.CharField(max_length=32)
    birth_at = models.DateField()
    started_at = models.DateField()
    email = models.EmailField(max_length=128, blank=True, null=True)
    phone_number = models.CharField(max_length=16)


class Role(models.Model):
    name = models.CharField(max_length=128)