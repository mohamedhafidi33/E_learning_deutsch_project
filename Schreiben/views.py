from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

def homeSchreiben(request):
    template = loader.get_template('indexHome.html')
    return HttpResponse(template.render(request=request))
def lektion1Schreiben(request):
    template = loader.get_template('index1.html')
    return HttpResponse(template.render(request=request))
def lektion2Schreiben(request):
    template = loader.get_template('index2.html')
    return HttpResponse(template.render(request=request))
def lektion3Schreiben(request):
    template = loader.get_template('index3.html')
    return HttpResponse(template.render(request=request))
def lektion4Schreiben(request):
    template = loader.get_template('index4.html')
    return HttpResponse(template.render(request=request))
def lektion5Schreiben(request):
    template = loader.get_template('index5.html')
    return HttpResponse(template.render(request=request))
def lektion6Schreiben(request):
    template = loader.get_template('index6.html')
    return HttpResponse(template.render(request=request))
# Create your views here.
