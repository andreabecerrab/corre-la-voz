import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  public fecha: string;
  public nombre: string;
  public handle: string;
 
  public mostrardatos:boolean;
  public comentario="";
  public listas=[];

  

  constructor() { 
    this.fecha="20/58/2020";
    this.nombre="Martia Diaz Garcia";
    this.handle="@MartinoMont";
   
    
    

  }


  ngOnInit(): void {
  }
  post(){
   this.listas.push(this.comentario);
   this.comentario="";
   this.mostrardatos=true;

  }


}
