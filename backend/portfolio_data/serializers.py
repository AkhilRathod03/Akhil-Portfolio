from rest_framework import serializers
from .models import Project, Skill

class ProjectSerializer(serializers.ModelSerializer):
    tech = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['title', 'subtitle', 'description', 'tech', 'category', 'link', 'featured']

    def get_tech(self, obj):
        return [t.strip() for t in obj.tech_stack.split(',') if t.strip()]

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['name', 'icon', 'level', 'category']

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = ['label', 'value']
