
from django.db import models


class Solicitudes(models.Model):
    fecha_solicitud = models.DateTimeField(blank=True, null=True)
    estado = models.CharField(max_length=255, blank=True, null=True)
    id_vehiculo = models.ForeignKey('page.Vehiculos', models.DO_NOTHING, db_column='id_vehiculo', blank=True, null=True)
    id_usuario = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'solicitudes'
