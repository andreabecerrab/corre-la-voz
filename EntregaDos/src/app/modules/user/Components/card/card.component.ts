import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
 
})
export class CardComponent implements OnInit {
public nombreMarcha:string;
public fecha:string;
  constructor() { 
    this.nombreMarcha="Marcha Mujeres";
    this.fecha="10/03/2022";
  }

  ngOnInit(): void {
  }

}
