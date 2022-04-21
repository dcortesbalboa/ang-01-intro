import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template:`
    <h1>la Base es {{ base }}</h1>

<span>{{contador}}</span>

<button (click)=" operar(base)">+{{base}}</button>

<button (click)=" operar(base*-1) ">-{{base}}</button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    contador: number=0;
  base : number=5;
  
    sumar(){
      return this.contador+=1;
    }
    restar(){
      return this.contador-=1;
    }
  
    operar(valor: number){
      return this.contador+=valor;
    }
}