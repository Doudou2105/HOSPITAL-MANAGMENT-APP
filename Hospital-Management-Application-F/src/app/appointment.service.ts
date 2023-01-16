import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL =   "http://localhost:8700/api/v2/appointment/allAppointments";
  private baseURL1 =  "http://localhost:8700/api/v2/appointment/addAppointment";
  private baseURL2 =  "http://localhost:8700/api/v2/appointment/deleteAppointment"; 
  private baseURL3 =  "http://localhost:8700/api/v2/appointment/updateAppointment";
  private baseURL4 =  "http://localhost:8700/api/v2/appointment/findAppoinitment";
  private baseURL7 =  "http://localhost:8700/api/v2/appointment/resultat";
  
  constructor(private httpClient : HttpClient) { }

  getAllAppointment() : Observable<Appointment[]>{

    return this.httpClient.get<Appointment[]>(`${this.baseURL}`)
  }

  getTotalAppointment() : Observable<number>{

    return this.httpClient.get<number>(`${this.baseURL7}`)
  }

  createAppointment(appointment: Appointment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, appointment);
  }
  getAppointmentById(appointment_id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseURL4}/${appointment_id}`);
  }

  updaAppointment(appointment_id: number, appointment: Appointment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${appointment_id}`, appointment);
  }

  deleteAppointment(appointment_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${appointment_id}`);
  }
}
