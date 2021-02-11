from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from .models import Concert, Song

import boto3

class IndexView(generic.ListView):
    template_name = 'shows/index.html'
    context_object_name = 'latest_concert_list'

    def get_queryset(self):
        return Concert.objects.all()[:5]


class DetailView(generic.DetailView):
    model = Concert
    template_name = 'shows/detail.html'

    def get_queryset(self):
        return Concert.objects.all()
