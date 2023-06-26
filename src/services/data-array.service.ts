import { Injectable } from "@angular/core";
import { userData } from "src/models/card.model";

@Injectable({
    providedIn:"root"
})

export class dataArrayService{
    liste:userData[]=[
        { 
          id:0,  
          nom:"Casagrande",
          premon:"Romain", 
          email:"poazpep", 
          tel:"25454554", 
          images:"assets/img/ian-dooley-d1UPkiFd04A-unsplash.jpg",
          job:"supplier"
        },
        {
        id:1,
        nom:"Casa", 
        premon:"jean",
        email:"pioazoi", 
        tel:"25445455484", 
        images:"assets/img/irene-strong-v2aKnjMbP_k-unsplash.jpg", 
        job:"suppllier"  
        },
        {  
        id:2,
        nom:"Cata", 
        premon:"marcel", 
        email:"poazpep", 
        tel:"25454554", 
        images:"assets/img/ian-dooley-d1UPkiFd04A-unsplash.jpg", 
        job:"supvlier"  
        },
        {
        id:3,
        nom:"dupont", 
        premon:"toto", 
        email:"poazpep", 
        tel:"25454554554", 
        images:"assets/img/ian-dooley-d1UPkiFd04A-unsplash.jpg", 
        job:"supplier"  
        }
      ];



 getcontact():userData[]{
     return this.liste
 }


 getcontactsid(id: number):userData{
  for(let  i=0;i<this.liste.length;i++){
    if(this.liste[i].id === id)
    return this.liste[i];
  }
  return new userData();
}
}
