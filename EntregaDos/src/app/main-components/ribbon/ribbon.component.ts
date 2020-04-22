import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html'
})
export class RibbonComponent implements OnInit {
public beta:string;

  constructor() { 
    this.beta="beta";
  }

  ngOnInit(): void {
  }

}
