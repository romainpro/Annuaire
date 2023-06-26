import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/models/card.model';
import { dataArrayService } from 'src/services/data-array.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
  contact!:userData;
  @Input()liste!:userData[];
   constructor(private contactArray :dataArrayService){

  }
  ngOnInit(): void {
  
  const idcontact = 1;
  this.liste=this.contactArray.getcontactsid(idcontact);
}
}
