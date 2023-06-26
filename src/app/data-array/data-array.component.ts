import { Component, OnInit, } from '@angular/core';
import { userData } from 'src/models/card.model';



@Component({
  selector: 'app-data-array',
  templateUrl: './data-array.component.html',
  styleUrls: ['./data-array.component.css']
})
export class DataArrayComponent implements OnInit {
  liste!:userData;
  
  ngOnInit(): void {
  
   
}
}
