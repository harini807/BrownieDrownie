import { Component } from '@angular/core';
import { CartItem } from '../Models/CartItem';
import { CartService } from '../Services/cart.service';
import { Cart } from '../Models/Cart';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  
  // title = "GooglePay";
  // buttonColor = "black";
  // buttonType = "buy";
  // isCustomSize = 250;
  // buttonHeight = 50;
  // isTop = window === window.top;
  
  // paymentRequest = {
  //   apiVersion:2,
  //   apiVersionMinor:0,
  //   allowedPaymentMethods:[
  //     { type:"CARD",
  //     parameters: {
  //       allowedPaymentMethods:["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //       allowedCardNetworks:["AMEX","VISA","MASTER"]
  //     },
  //     tokenizationSpecification:{
  //       type:"PAYMENT_GATEWAY",
  //       parameters:{
  //         gateway:"example",
  //         gatewayMerchantI:"exampleGatewayMerchantId"
  //       }

  //     }
    
  //   }
  //   ],
  //   merchantInfo:{
  //     merchantId: "12345678901234567890",
  //     merchantName:"demo Merchant"
  //   },
  //   transactionInfo:{
  //     totalPriceStatus:"FINAL",
  //     totalPriceLabel:"Total",
  //     totalPrice:"100.00",
  //     currencyCode:"USD",
  //     CountryCode:"US"
  //   }
  // };
  // onLoadPaymentData(event:any): void{
  //   console.log("Load Payment Data by BrownyDrowny", event.detail)
  // }

  constructor(private cartService:CartService, private route:Router) { }
  cart!:Cart;
  // public Isalert: boolean;

  handler:any = null;
  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.loadStripe();
    
    
  }
 
 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        
        alert('Token Created!!');

        // if(token){

        //  let Isalert = true;
        // } 
        if(alert){
          this.route.navigateByUrl(['/cart-page']);
        }  
       
        
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
   
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
           
            
 
          }
         
        });
      }
       
      window.document.body.appendChild(s);
    }
    
  }
}
