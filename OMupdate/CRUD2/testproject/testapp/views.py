from django.shortcuts import render, redirect
from .models import Student
from django.contrib import messages

# Create your views here.
def index(request):
    data = Student.objects.all()
    print(data)
    context = {"data": data}
    return render(request, "index.html", context)

def insertData(request):
    if request.method == "POST":
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        matricNo= request.POST.get('matricNo')
        college= request.POST.get('college')
        department= request.POST.get('department')
        email= request.POST.get('email')
        print(firstName, lastName, matricNo, college, department, email)
        query = Student(firstName = firstName, lastName = lastName, matricNo = matricNo, college = college, department = department, email = email)
        query.save()
        messages.info(request, "Data Inserted Successfully")
        return redirect("/")

    return render(request, "index.html")

def updateData(request, id):
    if request.method == "POST":
        firstName = request.POST['firstName']
        lastName = request.POST['lastName']
        matricNo= request.POST['matricNo']
        college= request.POST['college']
        department= request.POST['department']
        email= request.POST['email']

        edit = Student.objects.get(id = id)
        edit.firstName = firstName
        edit.lastName = lastName
        edit.matricNo = matricNo
        edit.college = college
        edit.department = department
        edit.email = email
        edit.save()
        messages.warning(request, "Data Updated Successfully")

        return redirect("/")

    d = Student.objects.get(id = id)
    context = {"d": d}
    return render(request, "edit.html", context)

def deleteData(request, id):
    d = Student.objects.get(id = id)
    d.delete()
    messages.error(request, "Data Deleted Successfully")


    return redirect("/")

def about(request):
    return render(request, "about.html")