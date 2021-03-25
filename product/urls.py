from django.urls import path, include
from .views import *


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'get', ProductGetView, basename='get'),
router.register(r'phone/company/list', PhoneCategoryViewSet, basename='phone-company')
router.register(r'phone/company/filter/list', PhoneCategoryfilterViewSet, basename='phone-company-filter')
urlpatterns = router.urls

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/list/', ProductViewSet.as_view(), name='products'),
]
