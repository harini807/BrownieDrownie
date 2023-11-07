import { Injectable } from '@angular/core';
import { food } from '../Models/food';
import { Tag } from '../Models/Tag';
import { ProductServicesService } from './product-services.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private ser:ProductServicesService) { }

  getFoodById(){
   
   return this.ser.GetMenu();
    
  }
  getAllFoodByTag(tag:string) :food[]{
    return tag == "All" ? 
    this.getAll() : this.getAll().filter(food => food.Tags?.includes(tag));



  }
  getAllTag():Tag[]{
    return[
      {name:'All',count:12},
      {name:'beverages',count: 3},
      {name: 'Coffee',count: 7},
      {name:'Tea',count:5},
      {name: 'snacks',count: 2}
    ];
  }

  getAll():food[]{
    return[
      {
        ID:1,
        ProductName:'Filter Coffee' ,
        CookTime:'10-20',
        Price: 10,

        Origin: ['India'],
        
        Image:'/assets/Coffee-1.jpg',
        Tags:['Coffee'],
        Quantity: 3

      },
    
    ]
  }
}

