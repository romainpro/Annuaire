import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  nom!:string;
  premon!:string;
  email!:string;
  tel!:string;
  ngOnInit(): void {
    this.nom="casagr";
    this.premon="Romain";
    this.email="rom@live.fr";
    this.tel="0625632563";
  }

}
