import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorService } from 'src/app/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-doctor',
  templateUrl: './list-of-doctor.component.html',
  styleUrls: ['./list-of-doctor.component.scss']
})
export class ListOfDoctorComponent implements OnInit {

  doctors !: Doctor[];
  filterTerm!: any;
 
  constructor( private doctorService :DoctorService,
    private router : Router,) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(){
    this.doctorService.getAllDoctor().subscribe(data=>{
      this.doctors=data;
    })
  }


  viewDoctor(doctor_id:number){
    this.router.navigate(['view-doctor', doctor_id]);
  }


  deleteDoctor(doctor_id: number){

     this.doctorService.deleteDoctor(doctor_id).subscribe(data=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'deleted successful',
        showConfirmButton: false,
        timer: 2000
      })
    
      this.getDoctors();
    })
  }
}
