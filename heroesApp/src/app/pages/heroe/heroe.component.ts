import { Component } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { map } from 'rxjs/operators';


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

     if(this.heroe.id){

      this.heroesService.actualizarHeroe(this.heroe)
    .subscribe( resp =>{
      console.log(resp);
     
    });
  
     }else{
      this.heroesService.crearHeroe(this.heroe)
      .subscribe( resp =>{
        console.log(resp);
        this.heroe=resp;
  
      });
    }







  
  
  
  
  }

}
