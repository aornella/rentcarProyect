from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.utils import timezone
from .models import Solicitudes
from page.models import Vehiculos




# Create your views here.
def dashboard(request):
	
	if request.user.is_staff: 
		return HttpResponseRedirect('/admin')
	else:
		s = Solicitudes.objects.all().filter(id_usuario=request.user.id)
		return render(request,'dashboard.html',{'solicitudes':s})


def generar_solicitud(request):
	
	s = Solicitudes()
	v = Vehiculos.objects.get(pk=request.POST['vehiculo'])

	
	s.fecha_solicitud = timezone.now()
	s.estado = 'Pendiente'
	s.id_vehiculo = v
	s.id_usuario = request.user.id
	s.save()
	
	v.active = 0
	v.save()
	
	#redirect al dashboard con solicitudes
	return HttpResponseRedirect('/my-rentcar')