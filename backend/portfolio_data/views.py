from rest_framework import viewsets
from .models import Project, Skill, Stat
from .serializers import ProjectSerializer, SkillSerializer, StatSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('order', 'id')
    serializer_class = ProjectSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all().order_by('order', 'id')
    serializer_class = SkillSerializer

class StatViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Stat.objects.all().order_by('order', 'id')
    serializer_class = StatSerializer
