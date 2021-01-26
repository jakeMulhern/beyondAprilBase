from django.urls import path

from . import views

app_name = 'shows'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('static/shows/audio/RedRocks2019/<str:song_location>/', views.DetailView.as_view(), name='songy')
]