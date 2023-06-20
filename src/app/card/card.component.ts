import { Component, OnInit } from '@angular/core';
import { userData } from 'src/models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    contact!:userData;
  ngOnInit(): void {
    this.contact=new userData();
    this.contact.nom="casagr";
    this.contact.premon="Romain";
    this.contact.email="rom@live.fr";
    this.contact.tel="0600000000";
    this.contact.images="assets/img/ian-dooley-d1UPkiFd04A-unsplash.jpg"
  } 


}
