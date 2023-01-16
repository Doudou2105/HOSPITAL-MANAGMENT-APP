import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-views-appointment-from-doctor',
  templateUrl: './views-appointment-from-doctor.component.html',
  styleUrls: ['./views-appointment-from-doctor.component.scss']
})
export class ViewsAppointmentFromDoctorComponent implements OnInit {

  appointments !: Appointment[];
  doctor_id !: number;
  doctor : Doctor = new Doctor();
  filterTerm !:any;
  
  constructor( private appointmentService :AppointmentService,
   private route : ActivatedRoute,
   private doctorService : DoctorService,
    private router : Router) { }

  ngOnInit(): void {
 
  this.getAppointments();

  this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorService.getDoctorById(this.doctor_id).subscribe(data=>{
      this.doctor = data;
    }, error => console.log(error))
  }

  private getAppointments(){
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appointments=data;
    })
  }

  updateAppointment(appointment_id:number){
    this.router.navigate(['update-appointment', appointment_id]);
  }


}
