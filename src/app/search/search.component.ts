import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../Services/login.service';
import { food } from '../Models/food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:string = '';
  searchFoods:food[];
  constructor(private route:ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
   
  }

  search(): void{
    console.log(this.searchItem);
      if(this.searchItem){
        console.log(this.searchItem);
      this.router.navigateByUrl('/search/' + this.searchItem)
      }
      
  }

 

}
