import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receptionist } from 'src/app/receptionist';
import { ReceptionistService } from 'src/app/receptionist.service';

@Component({
  selector: 'app-view-receptionist',
  templateUrl: './view-receptionist.component.html',
  styleUrls: ['./view-receptionist.component.scss']
})
export class ViewReceptionistComponent implements OnInit {

  receptionist_id !: number;
  receptionist : Receptionist = new Receptionist();
  constructor( private receptionistService :ReceptionistService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.receptionist_id = this.route.snapshot.params['receptionist_id'];
    this.receptionistService.getReceptionistById(this.receptionist_id).subscribe(data=>{
      this.receptionist = data;
    }, error => console.log(error))

  }

}
