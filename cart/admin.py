from django.contrib import admin
from .models import *
# Register your models here.

class CartProductAdmin(admin.ModelAdmin):
    list_display = ('cart', 'id', 'quantity')


class CartAdmin(admin.ModelAdmin):
    list_display = ('customer', 'total', 'complite')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('cart', 'total', 'order_status','payment_complit')

admin.site.register(Cart,CartAdmin)
admin.site.register(CartProduct, CartProductAdmin)
admin.site.register(Order,OrderAdmin)

