from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'name', 'email', 'phone']
    search_fields = ['name', 'email', 'phone']
    ordering_fields = ['id', 'name']

class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer