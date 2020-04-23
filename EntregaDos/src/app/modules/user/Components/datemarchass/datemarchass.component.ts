import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datemarchass',
  templateUrl: './datemarchass.component.html'
})
export class DatemarchassComponent implements OnInit {
  public datedm:string;

  constructor() { 
    this.datedm="10/Marzo/2020";
  }

  ngOnInit(): void {
  }

}
