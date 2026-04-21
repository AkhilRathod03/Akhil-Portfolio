import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from portfolio_data.models import Project, Skill, Stat

def populate():
    # Stats
    stats_data = [
        {'label': 'Internships', 'value': '3+', 'order': 1},
        {'label': 'Projects', 'value': '5+', 'order': 2},
        {'label': 'Certifications', 'value': '5+', 'order': 3},
        {'label': 'Hrs Coded', 'value': '1000+', 'order': 4},
    ]

    for s in stats_data:
        Stat.objects.get_or_create(
            label=s['label'],
            defaults=s
        )

    # Projects
    projects_data = [
        {
            'title': 'Smart Fit AI',
            'subtitle': 'Personalized Workout & Diet Planner',
            'description': 'An intelligent full-stack AI app that delivers personalized health recs. Users input fitness goals → ML backend generates custom diet & workout plans.',
            'tech_stack': 'Python, Streamlit, ML, Pandas, REST API',
            'category': 'AI/ML',
            'link': 'https://github.com/AkhilRathod03/SmartFit-AI-Planner',
            'featured': True,
            'order': 1
        },
        {
            'title': 'Web Vulnerability Detection',
            'description': 'Cybersecurity tool detecting CSRF vulnerabilities. ML model analyses web traffic patterns.',
            'tech_stack': 'Python, Flask, ML, HTML, CSS',
            'category': 'Cybersecurity',
            'link': 'https://github.com/AkhilRathod03',
            'featured': False,
            'order': 2
        },
        {
            'title': 'Suspicious Activity Detection',
            'description': 'Real-time deep learning surveillance system detecting abnormal human activity with 85% accuracy.',
            'tech_stack': 'Python, TensorFlow, OpenCV, Deep Learning',
            'category': 'Deep Learning',
            'link': 'https://github.com/AkhilRathod03',
            'featured': False,
            'order': 3
        },
        {
            'title': 'Temperature Converter',
            'description': 'Clean responsive utility web app converting Celsius, Fahrenheit, Kelvin instantly.',
            'tech_stack': 'HTML5, CSS3, JavaScript',
            'category': 'Web',
            'link': 'https://github.com/AkhilRathod03/OIBSIP_domain_taskno-1',
            'featured': False,
            'order': 4
        },
        {
            'title': 'E-Commerce Backend',
            'description': 'Full-featured Python backend system with MySQL optimization (30% gain).',
            'tech_stack': 'Python, MySQL, Pandas, REST APIs',
            'category': 'Backend',
            'link': 'https://github.com/AkhilRathod03/Pinnacle_Python1',
            'featured': False,
            'order': 5
        },
        {
            'title': 'Quiz Application',
            'description': 'Interactive quiz platform with scoring system and dynamic question loading.',
            'tech_stack': 'Python, MySQL, Pandas',
            'category': 'Backend',
            'link': 'https://github.com/AkhilRathod03',
            'featured': False,
            'order': 6
        }
    ]

    for p in projects_data:
        Project.objects.get_or_create(
            title=p['title'],
            defaults=p
        )

    # Skills
    skills_data = [
        # Languages & Frameworks
        {'name': 'Python', 'icon': '🐍', 'level': 90, 'category': 'languages', 'order': 1},
        {'name': 'JavaScript', 'icon': '📜', 'level': 75, 'category': 'languages', 'order': 2},
        {'name': 'HTML5', 'icon': '🌐', 'level': 85, 'category': 'languages', 'order': 3},
        {'name': 'CSS3', 'icon': '🎨', 'level': 85, 'category': 'languages', 'order': 4},
        {'name': 'React.js', 'icon': '⚛️', 'level': 75, 'category': 'languages', 'order': 5},
        {'name': 'Django', 'icon': '🎸', 'level': 70, 'category': 'languages', 'order': 6},
        {'name': 'Flask', 'icon': '🌶️', 'level': 70, 'category': 'languages', 'order': 7},
        {'name': 'Bootstrap', 'icon': '🅱️', 'level': 80, 'category': 'languages', 'order': 8},
        {'name': 'Streamlit', 'icon': '🔴', 'level': 80, 'category': 'languages', 'order': 9},
        {'name': 'NumPy', 'icon': '🔢', 'level': 80, 'category': 'languages', 'order': 10},
        {'name': 'Pandas', 'icon': '🐼', 'level': 80, 'category': 'languages', 'order': 11},
        {'name': 'Scikit-learn', 'icon': '🤖', 'level': 70, 'category': 'languages', 'order': 12},
        
        # Tools & Databases
        {'name': 'MySQL', 'icon': '🐬', 'level': 75, 'category': 'tools', 'order': 1},
        {'name': 'Oracle SQL', 'icon': '🔴', 'level': 70, 'category': 'tools', 'order': 2},
        {'name': 'SQLite3', 'icon': '💾', 'level': 75, 'category': 'tools', 'order': 3},
        {'name': 'Git', 'icon': '🌿', 'level': 85, 'category': 'tools', 'order': 4},
        {'name': 'GitHub', 'icon': '🐙', 'level': 85, 'category': 'tools', 'order': 5},
        {'name': 'Power BI', 'icon': '📊', 'level': 65, 'category': 'tools', 'order': 6},
        {'name': 'VS Code', 'icon': '💙', 'level': 90, 'category': 'tools', 'order': 7},
        {'name': 'Jupyter', 'icon': '📓', 'level': 85, 'category': 'tools', 'order': 8},
        {'name': 'REST APIs', 'icon': '🔌', 'level': 80, 'category': 'tools', 'order': 9},

        # Concepts
        {'name': 'Machine Learning', 'category': 'concepts', 'order': 1},
        {'name': 'Deep Learning', 'category': 'concepts', 'order': 2},
        {'name': 'Computer Vision', 'category': 'concepts', 'order': 3},
        {'name': 'OOP & Design Patterns', 'category': 'concepts', 'order': 4},
        {'name': 'Data Structures & Algorithms', 'category': 'concepts', 'order': 5},
        {'name': 'REST API Development', 'category': 'concepts', 'order': 6},
        {'name': 'SDLC', 'category': 'concepts', 'order': 7},
        {'name': 'Agile Methodology', 'category': 'concepts', 'order': 8},
        {'name': 'Debugging & Troubleshooting', 'category': 'concepts', 'order': 9},
        {'name': 'Version Control', 'category': 'concepts', 'order': 10},
    ]

    for s in skills_data:
        Skill.objects.get_or_create(
            name=s['name'],
            category=s['category'],
            defaults=s
        )

    print("Database populated successfully!")

if __name__ == '__main__':
    populate()
