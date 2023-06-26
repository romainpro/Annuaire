import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DataArrayComponent } from './data-array/data-array.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DataArrayComponent,
    DetailContactComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
