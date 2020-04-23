import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont-carrusel',
  templateUrl: './cont-carrusel.component.html'
})
export class ContCarruselComponent implements OnInit {
  public label:string;

  constructor() {
    this.label="Agregar imagen";
    
   }

  ngOnInit(): void {
  }

}
