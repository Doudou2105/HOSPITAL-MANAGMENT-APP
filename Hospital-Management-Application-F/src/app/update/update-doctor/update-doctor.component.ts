import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorService } from 'src/app/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit {

  doctor_id !: number;
   doctor : Doctor = new Doctor();
  constructor(private doctorService : DoctorService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorService.getDoctorById(this.doctor_id).subscribe(data=>{
      this.doctor = data;
    }, error => console.log(error))
  }

  private saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe(data=>{
      this.goToDoctorPage();
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Doctor successful',
        showConfirmButton: false,
        timer: 2000
      })
      
      
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
    }

     goToDoctorPage(){
     this.router.navigate(['/doctor-page']);
   }

}
