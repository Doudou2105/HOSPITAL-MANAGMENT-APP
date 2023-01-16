import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/patient';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {

  patient_id !: number;
  patient : Patient = new Patient();
  constructor( private patientService :PatientService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.patient_id = this.route.snapshot.params['patient_id'];
    this.patientService.getPatientById(this.patient_id).subscribe(data=>{
      this.patient = data;
    }, error => console.log(error))

  }
}
