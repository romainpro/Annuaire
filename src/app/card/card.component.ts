import { Component, OnInit,Input } from '@angular/core';
import { userData } from 'src/models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() contact!:userData;
  
  ngOnInit(): void {
   
  } 


}
