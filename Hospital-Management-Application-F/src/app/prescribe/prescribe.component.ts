import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.component.html',
  styleUrls: ['./prescribe.component.scss']
})
export class PrescribeComponent implements OnInit {

  bill : Bill = new Bill();
  doctor_id !: number
  doctor : Doctor = new Doctor();

  constructor( private billService : BillService,
    private route : ActivatedRoute,
    private doctorService : DoctorService,
    private router : Router) { }

  ngOnInit(): void {
    this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorService.getDoctorById(this.doctor_id).subscribe(data=>{
      this.doctor = data;
    }, error => console.log(error))
  }

  private saveBill(){
    this.billService.createBill(this.bill).subscribe(data=>{
      this.goToAppointmentList();
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bill has successful register!',
        showConfirmButton: false,
        timer: 2000
      })
    
      
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.bill);
    this.saveBill();
    }

     goToAppointmentList(){
     this.router.navigate(['/views-page']);
   }
}








