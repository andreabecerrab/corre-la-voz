import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-marcha',
  templateUrl: './description-marcha.component.html'
})
export class DescriptionMarchaComponent implements OnInit {
  public descripcion:string;

  constructor() {
    this.descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.";
                               
   
   }

  ngOnInit(): void {
  }

}
