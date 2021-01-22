from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from .models import Concert

def index(request):
    latest_concert_list = Concert.objects.all()[:5]
    context = {'latest_concert_list': latest_concert_list}
    return render(request, 'shows/index.html', context)


def detail(request, concert_id):
    concert = get_object_or_404(Concert, pk=concert_id)
    return render(request, 'shows/detail.html', {'concert': concert})