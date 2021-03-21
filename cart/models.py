from django.db import models
from userprofile.models import *
from product.models import *
# Create your models here.




class Cart(models.Model):
    customer = models.ForeignKey(CreateUserProfile,on_delete=models.CASCADE)
    total = models.PositiveIntegerField()
    complite = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)



class CartProduct(models.Model):
    cart = models.ForeignKey(Cart,on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    subtotal = models.PositiveIntegerField()
    def __str__(self):
        return self.cart.customer.user.username



class Order(models.Model):
    ORDER_STATUS = (
    ("Order Received", "Order Received"),
    ("Order Processing", "Order Processing"),
    ("On the way", "On the way"),
    ("Order Completed", "Order Completed"),
    ("Order Canceled", "Order Canceled"),
)
    cart  = models.OneToOneField(Cart,on_delete=models.CASCADE)
    address = models.TextField()
    mobile = models.CharField(max_length=16)
    email = models.EmailField(max_length=200)
    total = models.PositiveIntegerField()
    discount = models.PositiveIntegerField()
    order_status = models.CharField(max_length=100,choices=ORDER_STATUS,default="Order Received")
    date = models.DateField(auto_now_add=True)
    payment_complit = models.BooleanField(default=False,blank=True, null=True)
