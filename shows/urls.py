from django.urls import path

from . import views

app_name = 'shows'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:concert_id>/', views.detail, name='detail'),
]