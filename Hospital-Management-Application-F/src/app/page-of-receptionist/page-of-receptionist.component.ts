import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Receptionist } from '../receptionist';
import { ReceptionistService } from '../receptionist.service';

@Component({
  selector: 'app-page-of-receptionist',
  templateUrl: './page-of-receptionist.component.html',
  styleUrls: ['./page-of-receptionist.component.scss']
})
export class PageOfReceptionistComponent implements OnInit {

  receptionists !: Receptionist[];
  receptionist_id !: number;
  email !: string;
  photogroph !: string;
  name !: string;
  address !: string;
  birthday !: string;
  number !: string;
  gender !: string;
  receptionist : Receptionist = new Receptionist();
  receptionistConnected = new Receptionist();
  
  constructor(private receptionistService : ReceptionistService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllReceptionist();

    this.receptionist_id = this.route.snapshot.params['receptionist_id'];
    this.receptionistService.loginRecetionist(this.receptionist).subscribe(data=>{
      this.receptionist = data;
    }, error => console.log(error));


    
    this.receptionistService.getReceptionistById(+sessionStorage.getItem("receptionist_id")!).subscribe(data =>{
      this.receptionistConnected=data;
      console.log(data)

      console.log( sessionStorage.getItem("receptionist_id"))
     this.birthday = sessionStorage.getItem("birthday")!
     this.email =sessionStorage.getItem("email")!
      this.name =sessionStorage.getItem("name")!
      this.number= sessionStorage.getItem("number")!
      this.gender= sessionStorage.getItem("gender")!
      this.photogroph= sessionStorage.getItem("photogroph")!
      this.address= sessionStorage.getItem("address")!
          
    }, error => {console.log(error)})

  }

   private getAllReceptionist(){
      this.receptionistService.getAllReceptionist().subscribe(data =>{
        this.receptionists= data;
      });
    }
    
    updateReceptionist(receptionist_id:number){
      this.router.navigate(['update-receptionist', receptionist_id]);
    }

    // goToAppointmentList(receptionist_id:number){
    //   this.router.navigate(['listAppointment-page', receptionist_id]);
    // }

    // goToDoctorList(receptionist_id:number){
    //   this.router.navigate(['listDoctor-page', receptionist_id]);
    // }
    
    
  }

