


from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static

from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('product/', include('product.urls')),
    path('userprofile/', include('userprofile.urls')),
    # re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
    path('api/token/auth/', views.obtain_auth_token)
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




