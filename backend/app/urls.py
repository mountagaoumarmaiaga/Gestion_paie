from django.urls import path, include
from app import views

from  rest_framework.routers import  DefaultRouter
from .views import register_user, user_login, user_logout
router = DefaultRouter()
router.register(r'employees',views.EmployerViewset)
router.register(r'paies', views.PaieViewset)
router.register(r'contrats',views.ContratViewset)

urlpatterns = [
    path('', views.index, name='index'),
    path('v1/', include(router.urls)),
    path('test/', views.func),
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
]
