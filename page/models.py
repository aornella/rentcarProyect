
from django.db import models


class Vehiculos(models.Model):
    nombre = models.CharField(max_length=255, blank=True, null=True)
    descripcion = models.CharField(max_length=255, blank=True, null=True)
    capacidad = models.IntegerField(blank=True, null=True)
    lt = models.CharField(max_length=255, blank=True, null=True)
    img = models.CharField(max_length=255, blank=True, null=True)
    active = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'vehiculos'
