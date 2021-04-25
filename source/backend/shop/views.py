from django.shortcuts import render

from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, ListModelMixin

from .serializers import EmployeeSerializer
from .models import Employee


class EmployeeCreateView(CreateModelMixin, GenericAPIView):
    serializer_class = EmployeeSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class EmployeeListView(ListModelMixin, GenericAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)