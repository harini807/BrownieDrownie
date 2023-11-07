import { Component, OnInit } from '@angular/core';
import { food } from '../Models/food';
import { FoodService } from '../Services/food.service';

import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  foods:food[] = [];
  // foods:Foods[] = [];
  constructor(private fs:FoodService, private router:ActivatedRoute,private serv:ProductServicesService) { }
  searchFoods:food[];
  ngOnInit(): void {
    
    this.router.params.subscribe(params => {
      console.log(params);
      if(params['searchItem'])
      this.getProductsByTags(params['searchItem']);
      
      //this.foods = this.fs.getAll().filter(food =>food.ProductName.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      
      this.foods = this.fs.getAllFoodByTag(params['tag'])
      else
      this.getmenu()
    
    })
    
    
   
  }
  getProductsByTags(tag:string){
    this.serv.GetItemByTags(tag).subscribe((res)=>{
      this.searchFoods=res;
      console.log(this.searchFoods);
    })
  }
  getmenu(){
    this.serv.GetMenu().subscribe((res)=>{
      this.foods = res;
      console.log(this.foods);
    })
  }
}
