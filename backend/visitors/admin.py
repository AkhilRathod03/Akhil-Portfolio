from django.contrib import admin
from .models import VisitorCount

@admin.register(VisitorCount)
class VisitorCountAdmin(admin.ModelAdmin):
    list_display = ('count', 'last_updated')
