import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { food } from '../Models/food';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {
  apiUrl: string = "http://localhost:49393/api";

  constructor(private http:HttpClient) { }

  GetProduct(){
    return this.http.get(this.apiUrl + "/Total/Products");
  }
  GetTags(){
    return this.http.get(this.apiUrl + "/Total/Tags");
  }
  GetUsers(){
    return this.http.get(this.apiUrl + "/Total/Users");
  }
  GetBill(){
    return this.http.get(this.apiUrl + "/Total/Bill");
  }
}
