import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  
  constructor() {

   }

  ngOnInit(): void {
  }

  nuevo: Personaje={
    nombre: '',
    poder: 0
  }
}
