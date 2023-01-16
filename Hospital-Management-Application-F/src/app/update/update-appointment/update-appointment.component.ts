import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.scss']
})
export class UpdateAppointmentComponent implements OnInit {

  appointment_id !: number;
  appointment : Appointment = new Appointment();
  constructor( private appointmentService : AppointmentService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.appointment_id = this.route.snapshot.params['appointment_id'];
    this.appointmentService.getAppointmentById(this.appointment_id).subscribe(data=>{
      this.appointment = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.appointmentService.updaAppointment(this.appointment_id, this.appointment).subscribe(data=>{
      this.goToViewsAppointment();
    }, error => console.log(error));

  }

  goToViewsAppointment(){
    this.router.navigate(['/views-page']);
  }
}
