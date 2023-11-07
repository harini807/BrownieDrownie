import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../Models/Tag';
// import { FoodService } from '../Services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  FoodPageTags?:string[];
  @Input()
  JustifyContent?:string = 'center';


  tags: Tag[] = [];
  constructor() { }

  ngOnInit(): void {
    //if(!this.FoodPageTags)
   //this.tags = this.fs.getAllTag();
  }

}
