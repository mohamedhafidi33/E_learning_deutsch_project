from django.conf.urls import url , include
from Schreiben import urls,views
from . import views

urlpatterns =[
    url(r'^$',views.home,name='home'),
    url(r'^about',views.about,name='about'),

    url(r'^contact',views.contact,name='contact'),
    url(r'^login',views.login,name='login'),
    url(r'^signup',views.signup,name='signup'),
    url(r'^logoutlevels',views.logoutlevels,name='logoutlevels'),
    url(r'^logoutabout',views.logoutabout,name='logoutabout'),
    url(r'^logoutcontact',views.logoutcontact,name='logoutcontact'),
    url(r'^logout',views.logout,name='logout'),
    url(r'^', include('Schreiben.urls')),
    url(r'^', include('Gramatik.urls')),
    url(r'^', include('Lesen.urls')),
]