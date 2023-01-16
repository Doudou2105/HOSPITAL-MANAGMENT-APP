import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receptionist } from './receptionist';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  private baseURL = "http://localhost:8700/api/v5/receptionist/allReceptionists";
  private baseURL2 = "http://localhost:8700/api/v5/receptionist/addReceptionist";
  private baseURL3 = "http://localhost:8700/api/v5/receptionist/update";
  private baseURL4 = "http://localhost:8700/api/v5/receptionist/deleteReceptionist";
  private baseURL5 = "http://localhost:8700/api/v5/receptionist/findReceptionist";
  private baseURL7 = "http://localhost:8700/api/v5/receptionist/totalReceptionists";
  
  
  
  

  constructor(private httpClient : HttpClient) { }

  getAllReceptionist() : Observable<Receptionist[]>{

    return this.httpClient.get<Receptionist[]>(`${this.baseURL}`)
  }

  getTotalReceptionists() : Observable<number>{

    return this.httpClient.get<number>(`${this.baseURL7}`)
  }

  createReceptionist(receptionist: Receptionist): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, receptionist);
  }
  getReceptionistById(receptionist_id: number): Observable<Receptionist>{
    return this.httpClient.get<Receptionist>(`${this.baseURL5}/${receptionist_id}`);
  }

  updateReceptionist(receptionist_id: number, receptionist: Receptionist): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${receptionist_id}`, receptionist);
  }

  deleteReceptionist(receptionist_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${receptionist_id}`);
  }

  public loginRecetionist(receptionist:Receptionist):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8700/api/v5/receptionist/loginReceptionist",receptionist)
  }
}
