from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

def homeGramatik(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request=request))
def Artikel(request):
    template = loader.get_template('Artikel.html')
    return HttpResponse(template.render(request=request))
def imperativ(request):
    template = loader.get_template('imperativ.html')
    return HttpResponse(template.render(request=request))
def Konnektor(request):
    template = loader.get_template('Konnektor.html')
    return HttpResponse(template.render(request=request))
def lokalDativ(request):
    template = loader.get_template('lokalDativ.html')
    return HttpResponse(template.render(request=request))
def lokalRicht(request):
    template = loader.get_template('lokalRicht.html')
    return HttpResponse(template.render(request=request))
def Modalverben(request):
    template = loader.get_template('Modalverben.html')
    return HttpResponse(template.render(request=request))
def PerfektV(request):
    template = loader.get_template('PerfektV.html')
    return HttpResponse(template.render(request=request))
def Personalpronomenakkusativ(request):
    template = loader.get_template('Personalpronomen im Akkusativ.html')
    return HttpResponse(template.render(request=request))
def PrasensVVT(request):
    template = loader.get_template('PrasensVVT.html')
    return HttpResponse(template.render(request=request))
def Prateritum(request):
    template = loader.get_template('Prateritum.html')
    return HttpResponse(template.render(request=request))
def Prindi(request):
    template = loader.get_template('Prindi.html')
    return HttpResponse(template.render(request=request))
def Verben(request):
    template = loader.get_template('Verben.html')
    return HttpResponse(template.render(request=request))
def VerwendungVPR(request):
    template = loader.get_template('VerwendungVPR.html')
    return HttpResponse(template.render(request=request))
def Wortstellung(request):
    template = loader.get_template('Wortstellung in Aussagen.html')
    return HttpResponse(template.render(request=request))
def PDM(request):
    template = loader.get_template('PDM.html')
    return HttpResponse(template.render(request=request))
# Create your views here.
