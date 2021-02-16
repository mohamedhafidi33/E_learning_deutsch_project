from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
def homehoren(request):
    template = loader.get_template('hindex.html')
    return HttpResponse(template.render(request=request))
def hlektion1(request):
    template = loader.get_template('hindex1.html')
    return HttpResponse(template.render(request=request))
def hlektion2(request):
    template = loader.get_template('hindex2.html')
    return HttpResponse(template.render(request=request))
def hlektion3(request):
    template = loader.get_template('hindex3.html')
    return HttpResponse(template.render(request=request))
def hlektion4(request):
    template = loader.get_template('hindex4.html')
    return HttpResponse(template.render(request=request))
def hlektion5(request):
    template = loader.get_template('hindex5.html')
    return HttpResponse(template.render(request=request))
def hlektion6(request):
    template = loader.get_template('hindex6.html')
    return HttpResponse(template.render(request=request))
def hlektion7(request):
    template = loader.get_template('hindex7.html')
    return HttpResponse(template.render(request=request))
def hlektion8(request):
    template = loader.get_template('hindex8.html')
    return HttpResponse(template.render(request=request))
def hlektion9(request):
    template = loader.get_template('hindex9.html')
    return HttpResponse(template.render(request=request))
# Create your views here.
