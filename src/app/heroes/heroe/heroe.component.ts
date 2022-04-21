import { Component } from "@angular/core";

@Component({
 selector: 'app-heroe',
 templateUrl: './heroe.component.html'

})
export class HeroeComponent{
    nombre  : string="Iron man";
    edad    : number=45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{

        
        return `${this.nombre} - ${ this.edad }` ;
    }

    cambiarHeroe():void{
        this.nombre="SipderMan";
    }

    cambiarEdad(){
        this.edad=33;
    }


 }