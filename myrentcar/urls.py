from django.urls import path
from django.contrib.auth.decorators import login_required
from myrentcar import views

"""
my-rentcar/../
"""
urlpatterns = [
	path('',login_required(views.dashboard),name="my-rentcar"),
    path('generar-solicitud',views.generar_solicitud,name="generar_solicitud")   
]