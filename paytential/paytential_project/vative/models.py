from django.db import models

# Create your models here.
class Employees (models.Model):
    ordering =('first_name',)
    employee_id= models.PositiveIntegerField(unique=True, default=0)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    manager_id = models.CharField(max_length=30)
    operational_unit = models.CharField(max_length=30)
    performance_rating = models.IntegerField()
    potential_rating = models.IntegerField()
    ASSIGNMENT = (
        ('Adm', 'Administration/FrontDesk'),
        ('Bus', 'Business Office'),
        ('Mgm', 'Management'),
    )
    assignment = models.CharField(max_length=3, choices=ASSIGNMENT)

    def __str__(self):
        return self.employee_id

class Managers(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    manager_id = models.ForeignKey(Employees, on_delete=models.CASCADE, unique=True)

    def __str__(self):
        return self.first_name
