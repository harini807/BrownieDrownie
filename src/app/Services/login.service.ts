import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Models/user-model';
import { Observable } from 'rxjs';
import { food } from '../Models/food';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:49393/api";


  constructor(private http:HttpClient) { }

  ValidateUser(user:UserModel):Observable<number>{
    return this.http.get<number>(this.apiUrl+"/validate/user?PhoneNo="+user.PhoneNo  + "&Password="+user.Password)
  }
  ValidateAdmin(user:UserModel):Observable<number>{
    return this.http.get<number>(this.apiUrl+"/validate/user?PhoneNo="+user.PhoneNo  + "&Password="+user.Password)
  }

  GetCustomerDetails(PhoneNo:string){
    console.log(PhoneNo);
    return this.http.get<UserModel>(this.apiUrl+"/users/GetCurrentUserData?PhoneNo=" + PhoneNo);
  }
 
}
