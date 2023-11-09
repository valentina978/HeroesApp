
import { Component,OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel[]=[]; 
constructor(private heroesService:HeroesService){}


  ngOnInit(){
    this.heroesService.getHeroes()
    .subscribe(resp=>this.heroes=resp);
  }

    borrarHeroe(heroe:HeroeModel,i:number){
      Swal.fire({
        title: 'Esta seguro?',
        text:  `Esta seguro de que desea borrar a ${heroe.nombre}`,
        icon: 'question',
        showCancelButton: true,
        showConfirmButton: true
      });

      this.heroes.splice(i,1);
      /* this.heroesService.borrarHeroe(heroe.id).subscribe(); */

    }

  
}
