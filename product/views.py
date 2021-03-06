from django.shortcuts import render


from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from product.serializer import ProductSerializer, PhoneCategorySerializer

from product.models import Product, ProductCategory

# Create your views here.





class StandardResultsSetPagination(PageNumberPagination):
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 100

class ProductViewSet(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination



class ProductGetView(viewsets.ViewSet):

    def list(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk):
        queryset = Product.objects.get(id=pk)
        serializer = ProductSerializer(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK) 


    def put(self, request, pk):
        queryset = Product.objects.all()
        product_obj = get_object_or_404(queryset, pk=pk)
        serializer = ProductSerializer(product_obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, pk=None):
        try:
            queryset = Product.objects.all()
            product_obj = get_object_or_404(queryset, pk=pk)
            product_obj.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as error:
            return Response(error, status=status.HTTP_400_BAD_REQUEST)





class PhoneCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = PhoneCategorySerializer



class PhoneCategoryfilterViewSet(viewsets.ViewSet):
    def retrieve(self, request, pk):
        product_obj = ProductCategory.objects.get(id=pk)
        queryset = Product.objects.filter(category=product_obj) 
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

            