import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { food } from '../Models/food';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  apiUrl: string = "http://localhost:49393/api";


  constructor(private http:HttpClient) { }

  GetItemByTags(tags:string):Observable<food[]>{
    console.log(tags);
    return this.http.get<food[]>(this.apiUrl+"/FoodDetails/MenuFilter?tag=" + tags);
  }

  GetMenu():Observable<food[]>{
    return this.http.get<food[]>(this.apiUrl + "/FoodDetails/Details");
  }
  DisplayProduct(id:number):Observable<food>{
    return this.http.get<food>(this.apiUrl + "/FoodOrderingshow/display?id="+id);

  }



}
