import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from portfolio_data.models import Project, Skill, Stat

def populate():
    # Stats
    stats_data = [
        {'label': 'Internships', 'value': '4+', 'order': 1},
        {'label': 'Projects', 'value': '5+', 'order': 2},
        {'label': 'Certifications', 'value': '5+', 'order': 3},
        {'label': 'Hrs Coded', 'value': '1000+', 'order': 4},
    ]

    for s in stats_data:
        Stat.objects.update_or_create(
            label=s['label'],
            defaults=s
        )

    # Projects
    projects_data = [
        {
            'title': 'Centralized Curriculum System (CurveIQ)',
            'subtitle': 'AI Curriculum Generator (Synycs Internship)',
            'description': 'Full-stack multi-tenant academic platform with RBAC, Gemini API integration for automated content generation, JWT auth, FullCalendar scheduling, and Recharts analytics.',
            'tech_stack': 'React.js, Django REST, Gemini API, PostgreSQL, JWT, Vercel',
            'category': 'Full Stack & AI',
            'link': 'https://github.com/AkhilRathod03/CurveIQ.git',
            'featured': True,
            'order': 1
        },
        {
            'title': 'Smart Fit AI',
            'subtitle': 'Personalized Workout & Diet Planner',
            'description': 'An intelligent full-stack AI app that delivers personalized health recs. Users input fitness goals → ML backend generates custom diet & workout plans.',
            'tech_stack': 'Python, Streamlit, ML, Pandas, REST API',
            'category': 'AI/ML',
            'link': 'https://github.com/AkhilRathod03/SmartFit-AI-Planner',
            'featured': True,
            'order': 2
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
        {'name': 'Python', 'icon': '🐍', 'level': 92, 'category': 'languages', 'order': 1},
        {'name': 'React.js', 'icon': '⚛️', 'level': 88, 'category': 'languages', 'order': 2},
        {'name': 'Django & REST Framework', 'icon': '🎸', 'level': 85, 'category': 'languages', 'order': 3},
        {'name': 'Google Gemini API', 'icon': '✨', 'level': 88, 'category': 'languages', 'order': 4},
        {'name': 'JavaScript (ES6+)', 'icon': '📜', 'level': 85, 'category': 'languages', 'order': 5},
        {'name': 'Redux State Management', 'icon': '🔄', 'level': 82, 'category': 'languages', 'order': 6},
        {'name': 'Tailwind CSS', 'icon': '🎨', 'level': 85, 'category': 'languages', 'order': 7},
        {'name': 'FastAPI & Microservices', 'icon': '⚡', 'level': 80, 'category': 'languages', 'order': 8},
        {'name': 'Streamlit AI Apps', 'icon': '🔴', 'level': 85, 'category': 'languages', 'order': 9},
        {'name': 'Pandas & NumPy', 'icon': '🐼', 'level': 85, 'category': 'languages', 'order': 10},
        {'name': 'Scikit-learn & ML', 'icon': '🤖', 'level': 80, 'category': 'languages', 'order': 11},
        
        # Tools & Databases
        {'name': 'PostgreSQL Database', 'icon': '🐘', 'level': 85, 'category': 'tools', 'order': 1},
        {'name': 'Oracle SQL & PL/SQL', 'icon': '🔴', 'level': 82, 'category': 'tools', 'order': 2},
        {'name': 'MySQL Optimization', 'icon': '🐬', 'level': 85, 'category': 'tools', 'order': 3},
        {'name': 'WebSockets & Live Chat', 'icon': '⚡', 'level': 85, 'category': 'tools', 'order': 4},
        {'name': 'Docker Containerization', 'icon': '🐳', 'level': 80, 'category': 'tools', 'order': 5},
        {'name': 'Git & GitHub PR Workflows', 'icon': '🌿', 'level': 90, 'category': 'tools', 'order': 6},
        {'name': 'REST API Architecture', 'icon': '🔌', 'level': 88, 'category': 'tools', 'order': 7},
        {'name': 'CI/CD (Vercel, Render, Coolify)', 'icon': '🚀', 'level': 85, 'category': 'tools', 'order': 8},
        {'name': 'Power BI Analytics', 'icon': '📊', 'level': 75, 'category': 'tools', 'order': 9},

        # Concepts
        {'name': 'Generative AI Integration & Prompt Engineering', 'category': 'concepts', 'order': 1},
        {'name': 'Multi-Tenant Architecture & RBAC Security', 'category': 'concepts', 'order': 2},
        {'name': 'JWT Authentication & Authorization Protocols', 'category': 'concepts', 'order': 3},
        {'name': 'Functional, Regression & UAT ERP Testing', 'category': 'concepts', 'order': 4},
        {'name': 'Real-Time WebSockets & Push Notifications', 'category': 'concepts', 'order': 5},
        {'name': 'Procurement Lifecycle Workflows (RFQ, PO, Invoicing)', 'category': 'concepts', 'order': 6},
        {'name': 'Enterprise State Management & API Caching', 'category': 'concepts', 'order': 7},
        {'name': 'Data Structures & Algorithmic Problem Solving', 'category': 'concepts', 'order': 8},
        {'name': 'SDLC, Agile Sprints & Git Branch Synchronization', 'category': 'concepts', 'order': 9},
    ]

    for s in skills_data:
        Skill.objects.update_or_create(
            name=s['name'],
            category=s['category'],
            defaults=s
        )

    print("Database populated successfully!")

if __name__ == '__main__':
    populate()
