from django.conf.urls import url
from . import views

urlpatterns =[
    url(r'^$',views.home),
    url(r'^login',views.login),
    url(r'^signup',views.signup),
]