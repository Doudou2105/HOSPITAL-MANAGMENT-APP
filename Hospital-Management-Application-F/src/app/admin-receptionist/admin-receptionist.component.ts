import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AppointmentService } from '../appointment.service';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-admin-receptionist',
  templateUrl: './admin-receptionist.component.html',
  styleUrls: ['./admin-receptionist.component.scss']
})
export class AdminReceptionistComponent implements OnInit {

  receptionists !: Receptionist[];
  totalsPatient !: number ;
  totalsDoctor !: number;
  totalsReceptionist !: number;
  totalsAppointment !: number;

  filterTerm!: any;

  constructor( private receptionistService :ReceptionistService,
    private patientServeice :PatientService,
    private doctorService : DoctorService,
   private appointmentService : AppointmentService,

    private router : Router,) { }

  ngOnInit(): void {
    this.getReceptionist();
    this.getTotalPatients();    
    this.getTotalReceptionists();    
    this.getTotalDoctors();    
    this.getTotalAppointments();    
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







  private getReceptionist(){
    this.receptionistService.getAllReceptionist().subscribe(data=>{
      this.receptionists=data;
    })
  }

  viewReceptionist(receptionist_id:number){
    this.router.navigate(['view-receptionist', receptionist_id]);
  }

  deleteReceptionist(receptionist_id: number){
    this.receptionistService.deleteReceptionist(receptionist_id).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted successful',
        showConfirmButton: false,
        timer: 2000
      })
      this.getReceptionist();
    })
  }

}
