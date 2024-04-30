from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('echo_static/', views.EchoStaticView.as_view(), name='echo_static'),
    path('echo_static/view/<int:pk>/', views.MessageView.as_view(), name='view_message'),
    path('echo_dynamic/', views.echo_dynamic, name='echo_dynamic'),
]
