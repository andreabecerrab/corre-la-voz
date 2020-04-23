import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tw-card',
  templateUrl: './tw-card.component.html',
})
export class TwCardComponent implements OnInit {
  public name: string;
  public handle: string;
  public content: string;
  public date: string;
  public retweets: number;
  public likes: number;

  constructor() {
    this.name = 'Nombre';
    this.handle = '@hola';
    this.content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.';
    this.date = '20/04/2020';
    this.retweets = 5;
    this.likes = 5;
  }

  ngOnInit(): void {}
}
