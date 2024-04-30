from django.http import JsonResponse

from .models import Message


def get_message(request, id):
    message = Message.objects.get(pk=id)
    return JsonResponse({'message': message.message})

