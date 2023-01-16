import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  admin = new Admin();
  admin_id !: number;
   msg='';
   
    constructor(private adminService:AdminService,private router:Router,private  route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }

 // hospital@gmail.com
 // admin123

  loginAdmin(){
    this.adminService.loginAdmin(this.admin).subscribe(
      data=>{
     this.admin=data;
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'login successful',
        showConfirmButton: false,
        timer: 2000
      })
     
      this.router.navigate(['/admin-page']);
      
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
}
