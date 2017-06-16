from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.conf.urls import url, include

def index (request):
    return HttpResponse(render(request, 'vative/index.html'))

def help(request):
    return HttpResponse(render(request, 'vative/helppage.html'))

def dash(request):
    return HttpResponse(render(request, 'vative/dashboard.html'))

def json_employees(request):
    return (render(request, 'vative/api/json_employees.html'))

def json(request):
    return (render(request, 'vative/json.html'))
# Create your views here.
