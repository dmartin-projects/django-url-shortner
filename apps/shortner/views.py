from django.shortcuts import render,redirect
import uuid
from .models import Url
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect 
import json


def index(request):
    return render(request, 'shortner/index.html')


@csrf_protect
def create(request):
    if(request.method=='POST'):
        post_data = json.loads(request.body.decode("utf-8"))
        uid = str(uuid.uuid4())[:5]
        new_url = Url(link=post_data.get('url'), uuid=uid)
        new_url.save()
        return JsonResponse({"data":uid})

def go(request,pk):
    url_details = Url.objects.get(uuid=pk)
    return redirect(url_details.link)