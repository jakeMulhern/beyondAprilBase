from django.http import HttpResponse
from django.shortcuts import render
import boto3

def home(request):

    s3 = boto3.resource('s3')
    for bucket in s3.buckets.all():
        print(bucket.name)

    return render(request, 'home.html')