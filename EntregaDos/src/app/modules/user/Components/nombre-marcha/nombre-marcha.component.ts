import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-marcha',
  templateUrl: './nombre-marcha.component.html'
})
export class NombreMarchaComponent implements OnInit {
  public nombreMarcha:string;

  constructor() { 
    this.nombreMarcha="Marcha Nombre";
  }

  ngOnInit(): void {
  }

}
