import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor() { 

    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  borrarHeroe(): void{
    this.heroeBorrado=this.heroes.pop() ?? '';
    
  }

  heroes:string[]=['Spiderman', 'Superman', 'Batman','Thor'];
  heroeBorrado: string='';;

}
