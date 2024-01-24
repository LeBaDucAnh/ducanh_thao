# orders/urls.py
from django.urls import path
from .views import (
    OrderListCreateView,
    OrderRetrieveUpdateDestroyView,
    OrderItemCreateView,
    OrderItemRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyView.as_view(), name='order-retrieve-update-destroy'),
    path('order-items/', OrderItemCreateView.as_view(), name='order-item-create'),
    path('order-items/<int:pk>/', OrderItemRetrieveUpdateDestroyView.as_view(), name='order-item-retrieve-update-destroy'),
]
