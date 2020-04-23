import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-strikes',
  templateUrl: './table-strikes.component.html',
})
export class TableStrikesComponent implements OnInit {
  public strike;
  constructor() {
    this.strike = {
      id: 1,
      nombre: 'Juntos contra el COVID-19',
      fecha: '10/05/2020',
      hashtag: '#TodosJuntos',
    };
  }

  ngOnInit(): void {}
}
