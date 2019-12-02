from django.conf import settings
from django.urls import path
from django.contrib.auth.views import LoginView,LogoutView,PasswordResetView,PasswordResetDoneView,PasswordResetConfirmView,PasswordResetCompleteView
from django.contrib.auth.decorators import login_required
from accounts import views
"""
auth/../
"""
urlpatterns = [
	path('login/', LoginView.as_view(template_name='login.html'),name="login"),
	path('logout/', login_required(views.logout_view),name="logout"),
	path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
	path('password-reset/done/', PasswordResetDoneView.as_view(), name='password_reset_done'),
	path('reset/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
	path('reset/done/', PasswordResetCompleteView.as_view(), name='password_reset_complete'),


]