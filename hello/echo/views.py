from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import FormView, DetailView
from django.urls import reverse
from .forms import EchoForm
from .models import Message


def home(request):
    return HttpResponse("<a href='echo_static/'>Go to echo static.</a><br/>"
                        "<a href='localhost:3000/'>Go to echo dynamic.</a>")


class EchoStaticView(FormView):
    template_name = 'echo_static_form.html'
    form_class = EchoForm

    def form_valid(self, form):
        self.object = form.save()
        return super().form_valid(form)

    def get_success_url(self):
        return reverse('view_message', kwargs={'pk': self.object.pk})


class MessageView(DetailView):
    model = Message
    template_name = 'message.html'

