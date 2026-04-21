from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField()
    tech_stack = models.CharField(max_length=500) # Comma separated
    category = models.CharField(max_length=100)
    link = models.URLField(blank=True, null=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('languages', 'Languages & Frameworks'),
        ('tools', 'Tools & Databases'),
        ('concepts', 'Concepts'),
    ]
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, blank=True, null=True) # Emoji or icon class
    level = models.IntegerField(default=0) # Percentage
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} ({self.category})"

class Stat(models.Model):
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=50) # e.g. "3+", "1000+"
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.label
