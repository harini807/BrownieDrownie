import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../Models/CartItem';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService ){}
  ngOnInit(): void {
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
    
  }
}
