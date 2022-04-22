import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService{
    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        if(personaje){

        }

        this._personajes.push(personaje);
    }

    private _personajes: Personaje[]=[
        {nombre: 'Goku',
          poder:15000},
        {nombre: 'Vegeta',
        poder:8500}
      ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }
    
      nuevo: Personaje={
        nombre:'',
        poder: 0
      }
    
      cambiarNombre(event: any){
        console.log(event.target.value);
      }
    
      agregarNuevoPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
      }
}