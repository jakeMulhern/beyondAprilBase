from django.contrib import admin

from .models import Concert, Song


class SongInLine(admin.StackedInline):
    model = Song

class ConcertAdmin(admin.ModelAdmin):
    fieldsets = [
      ('Date', {'fields': ['concert_date']}), 
      ('Venue', {'fields': ['venue_name']}),
      ('City', {'fields': ['city_name'], 'classes':
      ['collapse']}),
    ]
    inlines = [SongInLine]


admin.site.register(Concert, ConcertAdmin)
admin.site.register(Song)
