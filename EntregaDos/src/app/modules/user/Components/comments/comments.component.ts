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
  public mostrardatos:boolean;
  public comentario;
  

  constructor() { 
    this.fecha="20/58/2020";
    this.nombre="Martia Diaz Garcia";
    this.handle="@MartinoMont";
    this.contenido=" hola";
    

  }

  ngOnInit(): void {
  }
  onClickMe(){
    this.mostrardatos=true;
  //  `` this.comentario=al;``

  }


}
