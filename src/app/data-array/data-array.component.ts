import { Component, OnInit, } from '@angular/core';
import { userData } from 'src/models/card.model';
import { dataArrayService, } from 'src/services/data-array.service';


@Component({
  selector: 'app-data-array',
  templateUrl: './data-array.component.html',
  styleUrls: ['./data-array.component.css']
})
export class DataArrayComponent implements OnInit {
  liste!:userData[];

  constructor(private contactArray :dataArrayService){

  }

  ngOnInit(): void {
    const idcontact = 1;
    this.liste=this.contactArray.getcontactsid(idcontact);
}
}
