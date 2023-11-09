import { Component } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:HeroeModel=new HeroeModel();


  constructor(private heroesService:HeroesService){}

  guardar(form: NgForm){
    if(form.invalid) {
      console.log('Formulario no valido');
      return;
    }


Swal.fire({
  title:'espere',
  text:'Guardando Informacion',
  /* type:'info',
  allowOutsideClick:false */
 
});

Swal.showLoading();
let peticion:Observable<any>;




     if(this.heroe.id){

      peticion=this.heroesService.actualizarHeroe(this.heroe);
   
  
     }else{
      peticion=this.heroesService.crearHeroe(this.heroe)
      
    }



peticion.subscribe(resp=>{
  Swal.fire({
    title:this.heroe.nombre,
    text:'Se actualizo correctmente',
    /* type:'success',
    allowOutsideClick:false */
   
  });
  
})



  
  
  
  
  }

}
