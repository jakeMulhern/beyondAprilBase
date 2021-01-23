from django.contrib import admin

from .models import Concert, Song


class SongInline(admin.StackedInline):
    model = Song

class ConcertAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Venue',            {'fields': ['venue_name']}),
        ('City',             {'fields': ['city_name']}),
        ('Date',             {'fields': ['concert_date'], 'classes': ['collapse']}),
    ]
    inlines = [SongInline]

admin.site.register(Concert, ConcertAdmin)
admin.site.register(Song)