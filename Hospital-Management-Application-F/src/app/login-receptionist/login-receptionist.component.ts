import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-receptionist',
  templateUrl: './login-receptionist.component.html',
  styleUrls: ['./login-receptionist.component.scss']
})
export class LoginReceptionistComponent implements OnInit {

  receptionist = new Receptionist();
 
 receptionist_id !: number;

  receptionistConnected = new Receptionist();
  
  msg='';
  gotcha ='';
  exist ='';
  constructor(private receptionistService : ReceptionistService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  loginReceptionist(){
    this.receptionistService.loginRecetionist(this.receptionist).subscribe(
    data=>{
    
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login successful',
        showConfirmButton: false,
        timer: 2000
      })
     
      this.router.navigate(['/listAppointment-page']);
      
    
  }, error=>

  {console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Bad request, please try again ',
      showConfirmButton: false,
      timer: 2000
    })
  this.msg="Bad request,please try again";
})

    }

    private registerRecetionist(){
      this.receptionistService.createReceptionist(this.receptionist).subscribe(data=>{
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
      console.log(this.receptionist);
      this.registerRecetionist();
      }


}