import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/models/card.model';
import { dataArrayService } from 'src/services/data-array.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
    liste!:userData;
   constructor(private contactArray :dataArrayService){

  }
  ngOnInit(): void {
  
  this.liste=this.contactArray.getcontactsid(0);
}
}
