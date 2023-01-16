import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL =   "http://localhost:8700/api/v3/doctor/allDoctors";
  private baseURL1 =  "http://localhost:8700/api/v3/doctor/addDoctor";
  private baseURL2 =  "http://localhost:8700/api/v3/doctor/deleteDoctor"; 
  private baseURL3 =  "http://localhost:8700/api/v3/doctor/updateDoctor";
  private baseURL4 =  "http://localhost:8700/api/v3/doctor/findDoctor";
  private baseURL7 =  "http://localhost:8700/api/v3/doctor/totalDoctors";

  


  constructor(private httpClient : HttpClient) { }

  getAllDoctor() : Observable<Doctor[]>{

    return this.httpClient.get<Doctor[]>(`${this.baseURL}`)
  }

  getTotalDoctors() : Observable<number>{

    return this.httpClient.get<number>(`${this.baseURL7}`)
  }

  createDoctor(doctor: Doctor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, doctor);
  }
  getDoctorById(doctor_id: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL4}/${doctor_id}`);
  }

  updaDoctor(doctor_id: number, doctor: Doctor): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${doctor_id}`, doctor);
  }

  deleteDoctor(doctor_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${doctor_id}`);
  }

  public loginDoctor(doctor:Doctor):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8700/api/v3/doctor/loginDoctor",doctor)
  }
}
