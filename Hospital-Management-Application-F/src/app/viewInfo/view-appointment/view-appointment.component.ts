import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/appointment';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {
  appointment_id !: number;
  appointment : Appointment = new Appointment();
  
  constructor( private appointmentService :AppointmentService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.appointment_id = this.route.snapshot.params['appointment_id'];
    this.appointmentService.getAppointmentById(this.appointment_id).subscribe(data=>{
      this.appointment = data;
    }, error => console.log(error))

  }

}
