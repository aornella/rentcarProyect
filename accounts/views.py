from django.shortcuts import render
from django.contrib.auth import logout
from django.http import HttpResponseRedirect

# Create your views here.

# Login manejado por el view LoginView de Django

# Logout redirect   
def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')

	
	