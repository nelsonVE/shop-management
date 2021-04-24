from django.contrib import admin
from django.urls import path

from rest_framework_simplejwt import views as jwt_views

from . import views

app_name = 'authentication'

urlpatterns = [

    # Token paths
    path('token/obtain/', views.AuthenticationTokenView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]