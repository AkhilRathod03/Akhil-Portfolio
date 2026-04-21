from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'received_at', 'is_read')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('received_at', 'is_read')
    list_editable = ('is_read',)
