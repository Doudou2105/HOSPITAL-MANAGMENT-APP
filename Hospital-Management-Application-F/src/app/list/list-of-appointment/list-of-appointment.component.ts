import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-appointment',
  templateUrl: './list-of-appointment.component.html',
  styleUrls: ['./list-of-appointment.component.scss']
})
export class ListOfAppointmentComponent implements OnInit {

  appointments !: Appointment[];
  
   filterTerm!: any;
 

  constructor( private appointmentService :AppointmentService,
    private router : Router,) { }

  ngOnInit(): void {
    this.getAppointments();

   
  }

  private getAppointments(){
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appointments=data;
    })
  }
  updateAppointment(appointment_id:number){
    this.router.navigate(['view-appointment', appointment_id]);
  }

  deleteAppointment(appointment_id: number){
    this.appointmentService.deleteAppointment(appointment_id).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted successful',
        showConfirmButton: false,
        timer: 2000
      })
      this.getAppointments();
    })
  }
}




  