import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppointmentService } from '../appointment.service';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.scss']
})
export class AdminPatientComponent implements OnInit {


  patients !: Patient[];
  totalsPatient !: number ;
  totalsDoctor !: number;
  totalsReceptionist !: number;
  totalsAppointment !: number;

  filterTerm!: any;
  

  constructor( private patientServeice :PatientService,
    private doctorService : DoctorService,
    private receptionistService : ReceptionistService,
    private appointmentService : AppointmentService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
      this.getPatients();
      this.getTotalPatients();    
      this.getTotalReceptionists();    
      this.getTotalDoctors();    
      this.getTotalAppointments();    
  }

  private getPatients(){
      this.patientServeice.getAllPatient().subscribe(data=>{
      this.patients=data;
    })
  }

  private getTotalPatients(){
      this.patientServeice.getTotalPatient().subscribe(data=>{
      this.totalsPatient=data;
    })
  }

  private getTotalReceptionists(){
    this.receptionistService.getTotalReceptionists().subscribe(data=>{
      this.totalsReceptionist=data;
    })
  }

  private getTotalDoctors(){
    this.doctorService.getTotalDoctors().subscribe(data=>{
      this.totalsDoctor=data;
    })
  }

  private getTotalAppointments(){
    this.appointmentService.getTotalAppointment().subscribe(data=>{
      this.totalsAppointment=data;
    })
  }

 

  viewPatient(patient_id:number){
    this.router.navigate(['view-patient', patient_id]);
  }

  deletePatient(patient_id: number){
    this.patientServeice.deletePatient(patient_id).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted successful',
        showConfirmButton: false,
        timer: 2000
      })
      this.getPatients();
    })
  }

  
}
