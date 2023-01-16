import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  filterTerm !: any;
  
  appointments !: Appointment[];
  appointment : Appointment = new Appointment();
  doctors !: Doctor[];

  patient_id !: number;
  patient : Patient = new Patient();
  patientConnected = new Patient();
  firstName !: string;
  lastName !: string;
  constructor(
              private appointmentService :AppointmentService,
              private route : ActivatedRoute,
              private patientService : PatientService,
              private router : Router ,
              private doctorService : DoctorService) { }

  ngOnInit(): void {
    this.getAppointments();
    this.getDoctors();
  
    this.patient_id = this.route.snapshot.params['patient_id'];
    this.patientService.getPatientById(this.patient_id).subscribe(data=>{
      this.patient = data;
    }, error => console.log(error))

    this.patientService.getPatientById(+sessionStorage.getItem("patient_id")!).subscribe(data =>{
      this.patientConnected=data;
      console.log(data)

      console.log( sessionStorage.getItem('"patient_id'))
      this.firstName= sessionStorage.getItem("firstName")!
      this.lastName = sessionStorage.getItem("lastName")!
    
          
    }, error =>{console.log(error)})
    
  }

  private getAppointments(){
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appointments=data;
    })
  }

  private getDoctors(){
    this.doctorService.getAllDoctor().subscribe(data =>{
      this.doctors = data;
    })
  }

  private saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'save successful',
        showConfirmButton: false,
        timer: 2000
      })
      this.getAppointments();
      
    }, error => console.log(error));
  }

  // goToAppointmentList(){
  //   this.router.navigate(['/appointment-page']);
  // }

  onSubmit(){
  console.log(this.appointment);
  this.saveAppointment();
  }

  deleteAppointment(appointment_id: number){
    this.appointmentService.deleteAppointment(appointment_id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }


  goToAppointment(patient_id:number){
    this.router.navigate(['appointment-page',patient_id]);
  }

  goToBill(patient_id:number){
    this.router.navigate(['bill-page', patient_id]);
  }

  
}
