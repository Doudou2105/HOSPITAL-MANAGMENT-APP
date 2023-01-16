import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receptionist } from 'src/app/receptionist';
import { ReceptionistService } from 'src/app/receptionist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-receptionist',
  templateUrl: './update-receptionist.component.html',
  styleUrls: ['./update-receptionist.component.scss']
})
export class UpdateReceptionistComponent implements OnInit {
  receptionists !: Receptionist[];
  receptionist_id !: number;
  receptionist : Receptionist = new Receptionist();
  constructor(private receptionistService : ReceptionistService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    
    this.receptionist_id = this.route.snapshot.params['receptionist_id'];
    this.receptionistService.getReceptionistById(this.receptionist_id).subscribe(data=>{
      this.receptionist = data;
    }, error => console.log(error))
  }

  private saveReceptionist(){
    this.receptionistService.createReceptionist(this.receptionist).subscribe(data=>{
      this.goToReceptionistPage();
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Updated Receptionist successful',
        showConfirmButton: false,
        timer: 2000
      })
    
      
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.receptionist);
    this.saveReceptionist();
    }

    goToReceptionistPage(){
     this.router.navigate(['/receptionist-page']);
   }

}
