from django.http import JsonResponse

# from hello.echo.models import Message


def get_message(request, id):
    # message = Message.objects.get(pk=request.GET['id'])
    # return JsonResponse({'message': message.message})
    return JsonResponse({'message': 'hello'})
