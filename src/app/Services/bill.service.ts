import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bill } from '../Models/bill';
@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = "http://localhost:49393/api";
  constructor(private http:HttpClient) { }

  InsertBill(bill:Bill){
    return this.http.post<Bill>(this.apiUrl + "/Bill/addbill",bill);
  }
}
