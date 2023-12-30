from django.db import models

# Create your models here.
class Student(models.Model):
    firstName = models.CharField(max_length = 25, blank = False, null = True)
    lastName = models.CharField(max_length = 25, blank = False, null = True)
    matricNo = models.CharField(max_length = 25, blank = False, null = True)
    college = models.CharField(max_length = 25, blank = False, null = True)
    department = models.CharField(max_length = 25, blank = False, null = True)
    email = models.EmailField()

    # def __str__(self):
    #     return self.firstName