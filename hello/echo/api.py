from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView

from .models import Message


class AddMessage(APIView):
    def post(self, request):
        msg = request.POST.get('message', 'default')
        Message.objects.create(message=msg)
        return HttpResponse()


class EditMessage(APIView):
    def post(self, request):
        msg = request.POST.get('message', 'default')
        obj = Message.objects.get(pk=request.POST.get('id'))
        obj.message = msg
        obj.save()
        return HttpResponse()


def get_message(request, id):
    message = Message.objects.get(pk=id)
    return JsonResponse({'message': message.message})


def get_all_messages(request):
    all_messages = list(Message.objects.all().values('id', 'message'))
    return JsonResponse(all_messages, safe=False)
