# from django.urls import path
# from .views import greet


# urlpatterns = [
#     path('greet/', greet, name='greet'),
# ] 

from django.urls import path
from django.views.generic import TemplateView
from . import views  # Eğer views.py'deki greet fonksiyonunu kullanıyorsanız

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),  # React'in index.html'i
    path('greet/', views.greet, name='greet'),  # Greet API endpoint'i
]
