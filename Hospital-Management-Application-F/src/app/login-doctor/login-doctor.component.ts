import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {

  doctor = new Doctor();
 
  doctor_id !: number;
 
   doctorConnected = new Doctor();
   
   msg='';
   gotcha ='';
   exist ='';
    constructor(private doctorService:DoctorService,private router:Router,private  route:ActivatedRoute) { }
  
    
    ngOnInit(): void {
    
    }
 
    loginDoctor(){
      this.doctorService.loginDoctor(this.doctor).subscribe(
        data=>{
         this.doctorConnected=data;
       
        console.log(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'login successful',
          showConfirmButton: false,
          timer: 2000
        })
       
        this.router.navigate(['/views-page']);
        
      }, error=>
      {console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Bad request,please try again',
          showConfirmButton: false,
          timer: 2000
        })
      this.msg="Bad request,please try again";
    })
  
    }

    private registerDoctor(){
     this.doctorService.createDoctor(this.doctor).subscribe(data=>{
       console.log(data);
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'register with successful',
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
     console.log(this.doctor);
     
     this.registerDoctor();
     }
}
