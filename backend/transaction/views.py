# transactions/views.py
from rest_framework import generics
from .models import Transaction
from .serializers import TransactionSerializer

class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def perform_create(self, serializer):
        # Lấy thông tin đơn hàng để tính tổng giá trị
        order = serializer.validated_data.get('order')
        total_amount = order.total_price

        # Lưu thông tin vào giao dịch
        user = self.request.customer
        serializer.save(total_amount=total_amount,
                        user=user,
                        customer_name=user.fullname,
                        phone_number=user.phone,
                        email=user.email,
                        address=user.address)
