import { Injectable } from '@angular/core';
import { Cart } from '../Models/Cart';
import { food } from '../Models/food';
import { CartItem } from '../Models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
 addToCart(food:food):void{
  let cartItem = this.cart.items.find(item => item.food.ID === food.ID)
  if(cartItem){
    this.changeQuantity(food.ID, cartItem.quantity + 1);
    return;
  }
  this.cart.items.push(new CartItem(food));
 }
 removeFromCart(foodId:number): void{
  this.cart.items = this.cart.items.filter(item => item.food.ID != foodId);
 }



 changeQuantity(foodId:number, quantity:number){
  let CartItem = this.cart.items.find(item => item.food.ID === foodId);
  if(!CartItem) return;
  CartItem.quantity = quantity;
 }
 getCart():Cart{
  return this.cart
 }
 
}
