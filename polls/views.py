from django.shortcuts import render
from .models import Qout
from .form import Form

# Create your views here.
def main(request):
    fm = Form()
    db = Qout.objects.all()

    if request.method == 'POST':
        form = Form(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            

    ctx = {
        'fm': fm,
        'db1': db,
    }
    return render(request, 'index.html', ctx)
