from rest_framework.serializers import ModelSerializer
from .models import Employee


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields = [
            "first_name",
            "last_name",
            "dni",
            "birth_at",
            "started_at",
            "email",
            "phone_number",
        ]