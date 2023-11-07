import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-payment-ui',
  templateUrl: './payment-ui.component.html',
  styleUrls: ['./payment-ui.component.css']
})
export class PaymentUiComponent implements OnInit{

  @ViewChild('PaymentRef', {static: true}) paymentRef! : ElementRef;
  constructor(private router:Router){ }

  ngOnInit(): void{
    // window.paypal.Buttons(
    //   {
    //     style:{
    //       layout: 'horizontal',
    //       color: 'blue',
    //       shape: 'react',
    //       label: 'paypal'
    //     }
    //   }
    // ).render(this.paymentRef.nativeElement);
    // console.log(window.paypal);
    window.paypal.Buttons(
      {
        style:
        {
                layout: 'horizontal',
                color: 'blue',
                shape: 'react',
                label: 'paypal'
         }
        }
    ).render(this.paymentRef.nativeElement);
  }
  cancel() {
    this.router.navigate(['cart-page'])
  }
}
