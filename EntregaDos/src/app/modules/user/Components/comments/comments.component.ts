import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  public fecha: string;
  public nombre: string;
  public handle: string;
  public contenido: string;

  constructor() { 
    this.fecha="20/58/2020";
    this.nombre="Martia Diaz Garcia";
    this.handle="@MartinoMont";
    this.contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet";

  }

  ngOnInit(): void {
  }

}
