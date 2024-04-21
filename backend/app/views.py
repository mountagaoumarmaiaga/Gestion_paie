from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view
from app .models import  Employer, Contrat, Paie
from app .serializers import EmployerSerializer, ContratSerializer, PaieSerializer
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from .models import Utilisateur
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
## # VIEWSET ################################################
class EmployerViewset(viewsets.ModelViewSet):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
    
    
class ContratViewset(viewsets.ModelViewSet):
    queryset = Contrat.objects.all()
    serializer_class = ContratSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
    

class PaieViewset(viewsets.ModelViewSet):
    queryset = Paie.objects.all()
    serializer_class = PaieSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
    

def func(request):
    return HttpResponse({'response': 'Test de nouvelle routes'})
         
       
def index(request):
    return HttpResponse({'response': 'Welcome to our API!'})




@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Vous pouvez renvoyer une réponse informative pour les requêtes GET ici
        return Response({'message': 'This endpoint only accepts POST requests for user registration.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

## # Authentification ################################
@api_view(['GET', 'POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = None
        if '@' in username:
            try:
                user = Utilisateur.objects.get(email=username)
            except ObjectDoesNotExist:
                pass

        if not user:
            user = authenticate(username=username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    elif request.method == 'GET':
        # Vous pouvez renvoyer une réponse informative pour les requêtes GET ici
        return Response({'message': 'This endpoint only accepts POST requests for login.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
def index(request):
     return render(request,'Frontend/index.html')