import json
import urllib.request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from .serializers import ContactMessageSerializer

def send_brevo_email(to_email, subject, text_content, reply_to_name=None, reply_to_email=None):
    if not hasattr(settings, 'BREVO_API_KEY') or not settings.BREVO_API_KEY:
        print("Brevo API key is not configured.")
        return False
    if not hasattr(settings, 'EMAIL_HOST_USER') or not settings.EMAIL_HOST_USER:
        print("Brevo sender email (EMAIL_USER) is not configured.")
        return False

    payload = {
        "sender": {
            "name": "Portfolio Contact Form",
            "email": settings.EMAIL_HOST_USER
        },
        "to": [
            {
                "email": to_email
            }
        ],
        "subject": subject,
        "textContent": text_content
    }

    if reply_to_name and reply_to_email:
        payload["replyTo"] = {
            "name": reply_to_name,
            "email": reply_to_email
        }

    try:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            "https://api.brevo.com/v3/smtp/email",
            data=data,
            headers={
                "accept": "application/json",
                "api-key": settings.BREVO_API_KEY,
                "content-type": "application/json",
            },
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=5) as response:
            res_body = response.read().decode("utf-8")
            print(f"Brevo email successfully sent to {to_email}: {res_body}")
            return True
    except Exception as e:
        print(f"Failed to send Brevo email to {to_email}: {e}")
        return False

class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            
            # Send Email notifications via Brevo API if configured
            if hasattr(settings, 'BREVO_API_KEY') and settings.BREVO_API_KEY:
                # 1. Send notification email to the owner (you)
                owner_subject = f"[Portfolio Contact] Message from {instance.name}: {instance.subject}"
                owner_message = (
                    f"You have received a new message from your portfolio contact form.\n\n"
                    f"Name: {instance.name}\n"
                    f"Email: {instance.email}\n"
                    f"Subject: {instance.subject}\n\n"
                    f"Message:\n{instance.message}\n"
                )
                send_brevo_email(
                    to_email=settings.EMAIL_HOST_USER,
                    subject=owner_subject,
                    text_content=owner_message,
                    reply_to_name=instance.name,
                    reply_to_email=instance.email
                )

                # 2. Send confirmation autoreply email to the visitor
                visitor_subject = f"Thank you for contacting me, {instance.name}!"
                visitor_message = (
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
                )
                send_brevo_email(
                    to_email=instance.email,
                    subject=visitor_subject,
                    text_content=visitor_message
                )

            return Response(
                {'message': 'Message sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
