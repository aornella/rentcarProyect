from django.shortcuts import render
from django.http import HttpResponse
from .models import Vehiculos

# Create your views here.
"""
def index(request):
	vehiculos = Vehiculos.objects.all()
	return HttpResponse(vehiculos)
"""
def index(request):
    v = Vehiculos.objects.all().filter(active=1)
    return render(request, 'index.html', {'vehiculos': v})


  	

