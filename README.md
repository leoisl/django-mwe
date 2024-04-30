# django-mwe

A minimal working example of a django project.

## Setup

Create a virtual environment and install the dependencies:
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Setup the database:
```bash
cd hello
python manage.py migrate
```

Run the server:
```bash
python manage.py runserver
```
