from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
def homeLesen(request):
    template = loader.get_template('indeXprincipal.html')
    return HttpResponse(template.render(request=request))
def Lektion1(request):
    template = loader.get_template('Lektion 1.html')
    return HttpResponse(template.render(request=request))
def Lektion3(request):
    template = loader.get_template('Lektion3.html')
    return HttpResponse(template.render(request=request))
def Lektion4(request):
    template = loader.get_template('Lektion4.html')
    return HttpResponse(template.render(request=request))
def Lektion5(request):
    template = loader.get_template('Lektion 5.html')
    return HttpResponse(template.render(request=request))
def Lektion6(request):
    template = loader.get_template('Lektion 6.html')
    return HttpResponse(template.render(request=request))
def Page4(request):
    template = loader.get_template('Page4.html')
    return HttpResponse(template.render(request=request))
def QuizPage2(request):
    template = loader.get_template('QuizPage2.html')
    return HttpResponse(template.render(request=request))
def Responses(request):
    template = loader.get_template('Responses.html')
    return HttpResponse(template.render(request=request))
def solutions(request):
    template = loader.get_template('solutions.html')
    return HttpResponse(template.render(request=request))
def solutions1(request):
    template = loader.get_template('solutions1.html')
    return HttpResponse(template.render(request=request))
def TESTER(request):
    template = loader.get_template('TESTER.html')
    return HttpResponse(template.render(request=request))
def jss(request):
    template = loader.get_template('jss.html')
    return HttpResponse(template.render(request=request))
def index7(request):
    template = loader.get_template('index7.html')
    return HttpResponse(template.render(request=request))
# Create your views here.
