from rest_framework.views import APIView
from rest_framework.response import Response
from .models import VisitorCount

class VisitorCountView(APIView):
    def get(self, request):
        visitor, created = VisitorCount.objects.get_or_create(id=1)
        visitor.count += 1
        visitor.save()
        return Response({'count': visitor.count})
