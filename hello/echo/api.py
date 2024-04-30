from django.http import JsonResponse
from django.core import serializers

from .models import Message


def get_message(request, id):
    message = Message.objects.get(pk=id)
    return JsonResponse({'message': message.message})


def get_all_messages(request):
    all_messages = list(Message.objects.all().values('id', 'message'))
    return JsonResponse(all_messages, safe=False)
