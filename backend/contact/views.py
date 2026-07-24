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
            
            # Send Email notifications if configured
            if hasattr(settings, 'EMAIL_HOST_USER') and settings.EMAIL_HOST_USER:
                # 1. Send notification email to the owner (you)
                try:
                    send_mail(
                        subject=f"[Portfolio Contact] Message from {instance.name}: {instance.subject}",
                        message=(
                            f"You have received a new message from your portfolio contact form.\n\n"
                            f"Name: {instance.name}\n"
                            f"Email: {instance.email}\n"
                            f"Subject: {instance.subject}\n\n"
                            f"Message:\n{instance.message}\n"
                        ),
                        from_email=settings.EMAIL_HOST_USER,
                        recipient_list=[settings.EMAIL_HOST_USER],
                        fail_silently=True,
                    )
                except Exception as e:
                    print(f"Owner email notification failed: {e}")

                # 2. Send confirmation autoreply email to the visitor
                try:
                    send_mail(
                        subject=f"Thank you for contacting me, {instance.name}!",
                        message=(
                            f"Hi {instance.name},\n\n"
                            f"Thank you for reaching out! I have received your message regarding '{instance.subject}' "
                            f"and will get back to you as soon as possible.\n\n"
                            f"Here is a copy of your message:\n"
                            f"----------------------------------------\n"
                            f"{instance.message}\n"
                            f"----------------------------------------\n\n"
                            f"Best regards,\n"
                            f"Megavath Akhil Kumar\n"
                            f"Python Developer & AI/ML Enthusiast\n"
                            f"GitHub: https://github.com/AkhilRathod03"
                        ),
                        from_email=settings.EMAIL_HOST_USER,
                        recipient_list=[instance.email],
                        fail_silently=True,
                    )
                except Exception as e:
                    print(f"Visitor email confirmation failed: {e}")

            return Response(
                {'message': 'Message sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
