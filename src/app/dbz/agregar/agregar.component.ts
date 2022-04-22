import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  @Input() nuevo:Personaje={nombre:'', poder:0};

  //@Output() onNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();

  ngOnInit(): void {
  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0){ return; };
    console.log(this.nuevo);
    this.dbzServce.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre: '',
      poder: 0
    };
    
  }

  constructor(private dbzServce: DbzService){

  }
}
