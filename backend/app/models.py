from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.db import models

class Employer(models.Model):
    SEXE_CHOICES = (
        ('H', 'Homme'),
        ('F', 'Femme'),
    )

    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    statut_matrimonial = models.CharField(max_length=50)
    sexe = models.CharField(max_length=1, choices=SEXE_CHOICES)  # Utilisation des choix prédéfinis
    nombre_enfant = models.IntegerField()
    date_recrutement = models.DateField()
    date_fin_contrat = models.DateField(null=True, blank=True)
    
    def __str__(self) -> str:
        return f"{self.nom} {self.prenom}  - Profession : {self.profession}"

class Contrat(models.Model):
    TYPE_CONTRAT_CHOICES = (
        ('CDD', 'Contrat à Durée Déterminée'),
        ('CDI', 'Contrat à Durée Indéterminée'),
        ('PRESTATAIRE', 'Contrat de prestataire'),
    )
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    type_contrat = models.CharField(max_length=20, choices=TYPE_CONTRAT_CHOICES)
    date_debut = models.DateField()
    
    def __str__(self) -> str:
        return f"{self.type_contrat}"

class Paie(models.Model):
    TYPE_PAIE_CHOICES = (
        ('MENSUEL', 'Mensuel'),
        ('TRIMESTRIEL', 'Trimestriel'),
        ('SEMESTRIEL', 'Semestriel'),
    )
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE)
    type_contrat = models.CharField(max_length=20, choices=Contrat.TYPE_CONTRAT_CHOICES)
    salaire_net = models.DecimalField(max_digits=10, decimal_places=2)
    prets = models.DecimalField(max_digits=10, decimal_places=2)
    primes_chantiers = models.DecimalField(max_digits=10, decimal_places=2)
    avance_salaire = models.DecimalField(max_digits=10, decimal_places=2)
    type_paie = models.CharField(max_length=20, choices=TYPE_PAIE_CHOICES)
    
    def __str__(self) -> str:
        return f"{self.employer} - Contract: {self.type_contrat} - Salaire: {self.salaire_net} - Type paie: {self.type_paie}"
    

class Utilisateur(AbstractUser):
    email = models.EmailField(unique=True)

    # Add  fields here, if needed

    def __str__(self):
        return self.username

