from django.utils.translation import gettext_lazy as _

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class AuthenticationTokenSerializer(TokenObtainPairSerializer):
    default_error_messages = {
        'no_active_account': _("Username or password are not valid")
    }

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username

        return token

    def validate(self, attrs):
        """
        Custom validation just to send user extra attributes.
        """
        data = super(AuthenticationTokenSerializer, self).validate(attrs)

        data.update({'id': self.user.id})
        data.update({'username': self.user.username})
        
        return data