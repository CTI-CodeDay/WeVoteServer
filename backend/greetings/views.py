#from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def greet(request):
    name = request.data.get('name', 'Guest')
    return Response({'message': f'Hello, {name}!'})

