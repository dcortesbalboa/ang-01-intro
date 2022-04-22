import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  //@Input() personajes: Personaje[]=[];

  constructor(public dbzService: DbzService) {}

  ngOnInit(): void {
  }

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
}
