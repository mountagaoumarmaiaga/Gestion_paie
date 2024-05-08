from django.contrib import admin
from .models import Employer, Paie, Contrat,Utilisateur
# Register your models here.
admin.site.register(Employer)
admin.site.register(Paie)
admin.site.register(Contrat)
admin.site.register(Utilisateur)