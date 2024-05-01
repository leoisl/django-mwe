FROM python:3.11
#######
ADD hello /
COPY requirements.txt .
RUN pip install -r requirements.txt
CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000
