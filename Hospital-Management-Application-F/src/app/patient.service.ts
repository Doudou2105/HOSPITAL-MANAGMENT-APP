import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8700/api/v1/patient/allPatients";
  private baseURL2 = "http://localhost:8700/api/v1/patient/addPatient";
  private baseURL3 = "http://localhost:8700/api/v1/patient/updatePatient";
  private baseURL4 = "http://localhost:8700/api/v1/patient/deletePatient";
  private baseURL5 = "http://localhost:8700/api/v1/patient/findPatient";
// private baseURL6 = "http://localhost:8700/api/v1/patient/loginPatient";
  private baseURL7 = "http://localhost:8700/api/v1/patient/totalPatients";
  
  constructor(private httpClient : HttpClient) { }

  getAllPatient() : Observable<Patient[]>{

    return this.httpClient.get<Patient[]>(`${this.baseURL}`)
  }

  getTotalPatient() : Observable<number>{

    return this.httpClient.get<number>(`${this.baseURL7}`)
  }


  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`, patient);
  }
  getPatientById(patient_id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL5}/${patient_id}`);
  }

  updatePatient(patient_id: number, patient: Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${patient_id}`, patient);
  }

  deletePatient(patient_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL4}/${patient_id}`);
  }

  
  public loginPatient(patient:Patient):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8700/api/v1/patient/loginPatient",patient)
  }
}
