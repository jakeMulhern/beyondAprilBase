from django.db import models


class Concert(models.Model):
    venue_name = models.CharField(max_length=100)
    city_name = models.CharField(max_length=100)
    concert_date = models.DateField('concert date')
    def __str__(self):
        return self.venue_name


class Song(models.Model):
    concert = models.ForeignKey(Concert, on_delete=models.CASCADE)
    song_title = models.CharField(max_length=100)
    song_location = models.CharField(max_length=200, default='')
    def __str__(self):
        return self.song_title