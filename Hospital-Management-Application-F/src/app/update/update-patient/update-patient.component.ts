import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/patient';
import { PatientService } from 'src/app/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {

  patient_id !: number;
  patient : Patient = new Patient();
  patientConnected = new Patient();
  firstName !: string;
  lastName !: string;
  constructor( private patientService : PatientService,
    private router : Router,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
   
    this.patient_id = this.route.snapshot.params['patient_id'];
      this.patientService.getPatientById(this.patient_id).subscribe(data=>{
        this.patient = data;
      }, error => console.log(error))
  }

  private savePatient(){
    this.patientService.updatePatient(this.patient_id, this.patient).subscribe(data=>{
    
      this.goToPatientPage();
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Patient successful within 24 hours',
        showConfirmButton: false,
        timer: 2000
      })
     
      
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
    }

     goToPatientPage(){
      this.router.navigate(['/patient-page']);
   }

 
  goToAppointment(patient_id:number){
     this.router.navigate(['appointment-page', patient_id]);
   }
 
   goToBill(patient_id:number){
     this.router.navigate(['bill-page', patient_id]);
   }
}
