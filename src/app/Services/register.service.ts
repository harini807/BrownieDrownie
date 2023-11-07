import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserModel } from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl:string = "http://localhost:49393/api";
  constructor(private http:HttpClient) { }

  RegisterUser(user:UserModel):Observable<boolean>{
    return this.http.post<boolean>(this.apiUrl+"/users/InsertUSer",user)
  }
}
