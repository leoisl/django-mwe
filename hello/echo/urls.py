from django.urls import path
from . import views, api

urlpatterns = [
    path('', views.home, name='home'),
    path('echo_static/', views.EchoStaticView.as_view(), name='echo_static'),
    path('echo_static/view/<int:pk>/', views.MessageView.as_view(), name='view_message'),
    path('api/get_message/<int:id>/', api.get_message, name="get_message"),
    path('api/get_all_messages/', api.get_all_messages, name="get_all_messages"),
    path('api/add_message/', api.AddMessage.as_view(), name="add_message"),
    path('api/edit_message/', api.EditMessage.as_view(), name="edit_message")
]
