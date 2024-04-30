from django.urls import path
from . import views
from .api import api

urlpatterns = [
    path('', views.home, name='home'),
    path('echo_static/', views.EchoStaticView.as_view(), name='echo_static'),
    path('echo_static/view/<int:pk>/', views.MessageView.as_view(), name='view_message'),
    path('api/get_message/<int:id>/', api.get_message, name="get_message"),
]
