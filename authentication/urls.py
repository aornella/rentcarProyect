from django.urls import path
from authentication import views
"""
auth/../
"""
urlpatterns = [
    path('login/',views.login,name="login")
]