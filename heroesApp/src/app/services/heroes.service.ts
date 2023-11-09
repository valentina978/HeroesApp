import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url='https://login-app-8c1e2-default-rtdb.firebaseio.com';

  constructor(private http:HttpClient) { }

  crearHeroe(heroe:HeroeModel){
    return this.http.post(`${this.url}/heroes.json`,heroe)
                       .pipe(
                        map((resp:any)=>{
                          heroe.id=resp.name;
                          return heroe;
                        })
                       );
                    
  }





}
