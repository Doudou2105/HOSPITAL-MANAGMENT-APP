import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-page-of-doctor',
  templateUrl: './page-of-doctor.component.html',
  styleUrls: ['./page-of-doctor.component.scss']
})
export class PageOfDoctorComponent implements OnInit {

   doctors !: Doctor[];
   doctor_id !: number;
    // email !:string;
    // gender !:string;
    // number !:string;
    // qualification !:string;
    // age !:string;
    // photograph !:string;
    // address !:string;
   
   
    attendance !:string;
   doctor : Doctor = new Doctor();
   doctorConnected = new Doctor();
  constructor(private doctorService : DoctorService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllDoctors();

    this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorService.loginDoctor(this.doctor).subscribe(data=>{
      this.doctor = data;
    }, error => console.log(error));


    this.doctorService.getDoctorById(+sessionStorage.getItem("doctor_id")!).subscribe(data =>{
      this.doctorConnected=data;
      console.log(data)

      // console.log( sessionStorage.getItem('"doctor_id'))
      // this.attendance= sessionStorage.getItem("attendance")!
      // this.qualification = sessionStorage.getItem("qualification")!
      // this.email =sessionStorage.getItem("email")!
      // this.age= sessionStorage.getItem("age")!
      // this.gender= sessionStorage.getItem("gender")!
      // this.photograph= sessionStorage.getItem("photograph")!
      // this.address= sessionStorage.getItem("address")!
          
    }, error =>{console.log(error)})
  
   
  }

  
  
 

  // goToAppointment(patient_id:number){
  //   this.router.navigate(['appointment-page', patient_id]);
  // }

  // goToBill(patient_id:number){
  //   this.router.navigate(['appointment-page', patient_id]);
  // }

 
  private getAllDoctors(){
       this.doctorService.getAllDoctor().subscribe(data =>{
         this.doctors= data;
       });
     }
     
     updateDoctor(doctor_id:number){
       this.router.navigate(['update-doctor', doctor_id]);
     }

}
