import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/doctor';
import { DoctorService } from 'src/app/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  doctor_id !: number;
  doctor : Doctor = new Doctor();
  constructor( private doctorService :DoctorService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.doctor_id = this.route.snapshot.params['doctor_id'];
    this.doctorService.getDoctorById(this.doctor_id).subscribe(data=>{
      this.doctor = data;
    }, error => console.log(error))

  }

}
