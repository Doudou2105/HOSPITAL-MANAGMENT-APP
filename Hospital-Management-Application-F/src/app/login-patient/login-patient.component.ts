import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})
export class LoginPatientComponent implements OnInit {

 patient = new Patient();
 
 patient_id !: number;
  patientConnected = new Patient();
  
  msg='';
  gotcha ='';
  exist ='';
   constructor(private patientService:PatientService,
    private router:Router,
    private  route:ActivatedRoute,
    ) { }
 
   
   ngOnInit(): void {

   
   }

   loginPatient(){
     this.patientService.loginPatient(this.patient).subscribe(
     data=>{
      this.patientConnected=data;
     sessionStorage.setItem('patient_id',this.patientConnected.patient_id.toString())
     sessionStorage.setItem('firstName', this.patientConnected.firstName)
     sessionStorage.setItem('lastName', this.patientConnected.lastName)
     sessionStorage.setItem('address', this.patientConnected.address)
     sessionStorage.setItem('email', this.patientConnected.email)
     sessionStorage.setItem('gender', this.patientConnected.gender)
     sessionStorage.setItem('age', this.patientConnected.age)
     sessionStorage.setItem('blood', this.patientConnected.blood)
     sessionStorage.setItem('photograph', this.patientConnected.photograph)
     sessionStorage.setItem('number', this.patientConnected.number)
      
       console.log(data);
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login successful',
        showConfirmButton: false,
        timer: 2000
      })
      
       this.router.navigate(['/patient-page']);
       
     }, error=>
     {console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Bad request, please try again',
        showConfirmButton: false,
        timer: 2000
      })
     this.msg="Bad request,please try again";
   })
 
   }


   private registerPatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'register successful',
        showConfirmButton: false,
        timer: 2000
      })
    let ref = document.getElementById('cancel')
    ref?.click();
      
    },error=>
    {console.log(error);
    this.exist="email has been already exist !";
  })
  }

  onRegister(){
    console.log(this.patient);
    this.registerPatient();
   
    }
}
