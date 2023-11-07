import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { food } from '../Models/food';
import { FoodService } from '../Services/food.service';
import { ProductServicesService } from '../Services/product-services.service';

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent {


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
