from django.contrib import admin
from django.urls import path, include

from . import views

app_name = 'shop'

urlpatterns = [
    path('employee/create', views.EmployeeCreateView.as_view(), name='employee-create'),
    path('employee/list', views.EmployeeListView.as_view(), name='employee-list'),
]