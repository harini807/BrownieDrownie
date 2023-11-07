import { Component } from '@angular/core';
import { AdmindashboardService } from '../Services/admindashboard.service';

import { Admin } from '../Models/admin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

TotalProduct:any;
TotalUsers: any;
TotalTags:any;
TotalBill:any;
  constructor(private serv:AdmindashboardService){
    //Get Product
  serv.GetProduct().subscribe(data=>{
    this.TotalProduct = data;
  })
  //Get Tags
  serv.GetTags().subscribe(data=>{
    this.TotalTags = data;
  })

  //Get Users
  serv.GetUsers().subscribe(data=>{
    this.TotalUsers = data;
  })

  //Get Bill
  serv.GetBill().subscribe(data=>{
    this.TotalBill = data;
  })










  }


}
