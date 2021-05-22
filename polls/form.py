from django.forms import ModelForm
from .models import Qout
from django import forms

class Form(ModelForm):
    class Meta:
        model = Qout
        fields = ('name', 'category', 'image', 'qout',)

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control form-sub mb-3', 'placeholder': 'Your Name'}),
            'category': forms.TextInput(attrs={'class': 'form-control form-sub mb-3', 'placeholder': 'Category'}),
            'image': forms.FileInput(attrs={'class': 'form-control form-sub', 'type': 'file'}),
            'qout': forms.Textarea(attrs={'class': 'form-control mt-5 form-sub txt', 'placeholder': 'Enter qout'}),
        }

