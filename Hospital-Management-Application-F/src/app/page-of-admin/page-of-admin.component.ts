import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import  Swal from 'sweetalert2';
import { PatientService } from '../patient.service';
import { AppointmentService } from '../appointment.service';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-page-of-admin',
  templateUrl: './page-of-admin.component.html',
  styleUrls: ['./page-of-admin.component.scss']
})
export class PageOfAdminComponent implements OnInit {

  doctors !: Doctor[];

  filterTerm !: any;

  totalsPatient !: number ;
  totalsDoctor !: number;
  totalsReceptionist !: number;
  totalsAppointment !: number;


    


  constructor( private doctorService :DoctorService,
    private patientServeice :PatientService,
    private receptionistService : ReceptionistService,
    private appointmentService : AppointmentService,
    private router : Router,) { }

  ngOnInit(): void {
    this.getDoctors();
    this.getTotalPatients();    
    this.getTotalReceptionists();    
    this.getTotalDoctors();    
    this.getTotalAppointments(); 
  }

  private getDoctors(){
    this.doctorService.getAllDoctor().subscribe(data=>{
      this.doctors=data;
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
  viewDoctor(doctor_id:number){
    this.router.navigate(['view-doctor', doctor_id]);
  }

  deleteDoctor(doctor_id: number){
    this.doctorService.deleteDoctor(doctor_id).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted successful',
        showConfirmButton: false,
        timer: 2000
      })
      this.getDoctors();
    })
  }

}
