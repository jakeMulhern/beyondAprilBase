from django.http import HttpResponse
from django.shortcuts import render
from .settings import BASE_DIR

def home(request):

    return render(request, 'home.html')