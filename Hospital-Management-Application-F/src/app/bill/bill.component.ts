import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';
import {jsPDF} from "jspdf"; 
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  @ViewChild('bill', {static: false}) el!: ElementRef;

  bills !: Bill[];
  patient_id !: number;
  patient : Patient = new Patient();
  patientConnected = new Patient();
  firstName !: string;
  lastName !: string;
  
  
  constructor(private billService : BillService,
    private route : ActivatedRoute,
    private patientService : PatientService,
    private router : Router) { }

  ngOnInit(): void {
    this.getBills();

    this.patient_id = this.route.snapshot.params['patient_id'];
    this.patientService.getPatientById(this.patient_id).subscribe(data=>{
      this.patient = data;
    }, error => console.log(error))
  }

  private getBills(){
    this.billService.getAllBills().subscribe(data=>{
      this.bills= data;
    })

    this.patientService.getPatientById(+sessionStorage.getItem("patient_id")!).subscribe(data =>{
      this.patientConnected=data;
      console.log(data)

      console.log( sessionStorage.getItem('"patient_id'))
      this.firstName= sessionStorage.getItem("firstName")!
      this.lastName = sessionStorage.getItem("lastName")!
    
          
    }, error =>{console.log(error)})
  }

  printBill(){
    let pdf = new jsPDF('p', 'pt', 'a3');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("bill.pdf");
      }
    });
    
  }

  goToAppointment(patient_id:number){
    this.router.navigate(['appointment-page', patient_id]);
  }

  goToBill(patient_id:number){
    this.router.navigate(['bill-page', patient_id]);
  }

}


 