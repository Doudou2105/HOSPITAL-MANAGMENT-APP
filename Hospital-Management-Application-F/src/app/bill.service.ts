import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseURL1 = "http://localhost:8700/api/v7/bill/allBills";
  private baseURL2 = "http://localhost:8700/api/v7/bill/addBill";
  private baseURL3 = "http://localhost:8700/api/v7/bill/deleteBill";


  constructor(private httpClient : HttpClient) { }

  getAllBills() : Observable<Bill[]>{

    return this.httpClient.get<Bill[]>(`${this.baseURL1}`)
  }

  createBill(bill: Bill): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, bill);
  }
 deleteBill(bill_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${bill_id}`);
  }
}
