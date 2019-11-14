from django.urls import path
from page import views

urlpatterns = [
    path('',views.index,name="index"),
]