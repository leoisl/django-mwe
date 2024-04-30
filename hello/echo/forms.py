from django import forms
from .models import Message

class EchoForm(forms.ModelForm):
    class Meta:
        model = Message
        fields = ['message']