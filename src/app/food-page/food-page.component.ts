import { Component, OnInit } from '@angular/core';
import { food } from '../Models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../Services/food.service';
import { Cart } from '../Models/Cart';
import { CartService } from '../Services/cart.service';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  Cart:string = '';
  foods:food;
  constructor(private productService:ProductServicesService, private cartService:CartService, private router:ActivatedRoute, private route:Router){ }

    // activatedRoute.params.subscribe((params) => {
      
    //   if(params['id']){
    //   foodService.getFoodById().subscribe((res)=>{
    //     this.food=res.find(food => food.ID == params['id'])!;
    //     }) //undefined
    // }
    // })
//}
  ngOnInit(): void {
    
    this.router.params.subscribe(params => {
      console.log(params);
      if(params['id'])
      this.showproduct(params['id']);
      
      //this.foods = this.fs.getAll().filter(food =>food.ProductName.toLowerCase().includes(params['searchItem'].toLowerCase()));
      // else if(params['id'])
      
      // this.food = this.productService.getAllFoodByTag(params['tag'])
      // else
      // this.getmenu()
      console.log(this.foods);
    
    })



  }

  showproduct(id:number){
    this.productService.DisplayProduct(id).subscribe((res)=>{
      this.foods= res;
      console.log(this.foods);
    })
  }
  addToCart(){
    this.cartService.addToCart(this.foods);
    this.route.navigateByUrl('/cart-page')
  }

 
 

  }
