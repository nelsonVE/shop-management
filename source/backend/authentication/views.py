from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import AuthenticationTokenSerializer

class AuthenticationTokenView(TokenObtainPairView):
    serializer_class = AuthenticationTokenSerializer
