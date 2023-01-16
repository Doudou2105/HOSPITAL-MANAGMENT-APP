import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-page-of-patient',
  templateUrl: './page-of-patient.component.html',
  styleUrls: ['./page-of-patient.component.scss']
})
export class PageOfPatientComponent implements OnInit {

  patients !: Patient[];
  patient_id !: number;
  firstName !: string;
  lastName !: string;
  email !: string;
  doctorName !: string;
  address !: string;
  password !: string;
  number !:string;
  photograph !: string;
  blood !: string;
  age !: string;
  gender !: string ; 
  patient : Patient = new Patient();
  patientConnected = new Patient();
  
  constructor(private patientService : PatientService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllPatients();

    this.patient_id = this.route.snapshot.params['patient_id'];
    this.patientService.loginPatient(this.patient).subscribe(data=>{
      this.patient = data;
    }, error => console.log(error));


    this.patientService.getPatientById(+sessionStorage.getItem("patient_id")!).subscribe(data =>{
      this.patientConnected=data;
      console.log(data)

      console.log( sessionStorage.getItem('"patient_id'))
      this.firstName= sessionStorage.getItem("firstName")!
      this.lastName = sessionStorage.getItem("lastName")!
      this.email =sessionStorage.getItem("email")!
      this.age= sessionStorage.getItem("age")!
      this.blood= sessionStorage.getItem("blood")!
      this.gender= sessionStorage.getItem("gender")!
      this.photograph= sessionStorage.getItem("photograph")!
      this.address= sessionStorage.getItem("address")!
          
    }, error =>{console.log(error)})
  
   
  }

  private getAllPatients(){
    this.patientService.getAllPatient().subscribe(data =>{
      this.patients= data;
    });
  }
  
  updatePateint(patient_id:number){
    this.router.navigate(['update-patient',patient_id]);
  }

  goToAppointment(patient_id:number){
    this.router.navigate(['appointment-page',patient_id]);
  }

  goToBill(patient_id:number){
    this.router.navigate(['bill-page',patient_id]);
  }

}
