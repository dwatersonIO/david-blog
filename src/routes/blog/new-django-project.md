---
title: Start new Django project
summary: Install, new site and project
tags: 
    - python
    - djano
date: 2022-02-17
---

<article>

# {title}
## {summary}

### New virtual environment

python -m venv venv    
venv\scripts\activate.bat    

### Install and make project and app
python -m pip install django    
django-admin startproject mysite    
python manage.py startapp blog    

### Register, run, create admin user
Register app in settings.py    
'blog.apps.BlogConfig',    
python manage.py runserver    
python manage.py createsuperuser    

###### <a class = "high-col" href="/blog">Back to blog</a>
</article>