from django.shortcuts import render
from django.contrib.auth import logout
from django.http import HttpResponseRedirect

# Create your views here.
from django.shortcuts import render, redirect
from .forms import RegisterForm



# Login manejado por el view LoginView de Django

# Logout redirect   
def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')

#intento
# Create your views here.
def register(response):
    if response.method == "POST":
	    form = RegisterForm(response.POST)
	    if form.is_valid():
	        form.save()
	    return redirect("login")
    else:
    	form = RegisterForm()
    
    return render(response, "register.html", {"form":form})
