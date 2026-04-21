from django.urls import path
from .views import VisitorCountView

urlpatterns = [
    path('', VisitorCountView.as_view(), name='visitor-count'),
]
