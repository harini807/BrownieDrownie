import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../Models/CartItem';
import { FoodService } from '../Services/food.service';
import { Bill } from '../Models/bill';
import { BillService } from '../Services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  Bill:Bill;
  constructor(private cartService: CartService, private billservice:BillService, private route:Router) { //after design this page, I will remove it
    
   

    this.setCart();
   }
    ngOnInit(): void {
      
    }
    setCart(){
      this.cart = this.cartService.getCart();
    }
    RemoveFromCart(cartItem: CartItem){
      this.cartService.removeFromCart(cartItem.food.ID,);
      this.setCart(); //instance load data
    }
    ChangeQuantity(cartItem: CartItem, quantityInString:string)
    {
      const quantity = parseInt(quantityInString);
      this.cartService.changeQuantity(cartItem.food.ID, quantity);
      this.setCart();
    }

    bill(){

      this.billservice.InsertBill(this.Bill);
      this.route.navigateByUrl('/bill')

      console.log("test");
  
      const dateTimeNow=new Date();
      let bill: Bill={
        BillId:dateTimeNow.toString(),
        CustomerID:localStorage.getItem("PhoneNo")!,
        ID: 0,
        Quantity:0,
        Price:0,
      }
    
      this.cart.items.forEach(item=>{

        console.log(item.food.ID)
        bill.ID=item.food.ID;
        bill.Price=item.price;
        bill.Quantity=item.quantity;

        this.billservice.InsertBill(bill).subscribe({
          next(){
            alert("Added Successfully");
            
            
          },
          error(err) {
            console.log(err);
          },
        })
      } )
    }
   

   

}
