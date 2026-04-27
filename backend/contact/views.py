from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactMessageSerializer

class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            
            # Send Email notification if configured
            if hasattr(settings, 'EMAIL_HOST_USER') and settings.EMAIL_HOST_USER:
                try:
                    send_mail(
                        subject=f"New Portfolio Message: {instance.subject}",
                        message=f"From: {instance.name} ({instance.email})\n\nMessage:\n{instance.message}",
                        from_email=settings.EMAIL_HOST_USER,
                        recipient_list=[settings.EMAIL_HOST_USER],
                        fail_silently=True,
                    )
                except Exception as e:
                    print(f"Email failed: {e}")

            return Response(
                {'message': 'Message sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
