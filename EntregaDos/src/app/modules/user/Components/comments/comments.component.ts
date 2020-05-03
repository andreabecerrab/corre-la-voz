import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
<<<<<<< HEAD
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


=======
  public comentario: '';
  public mostrados: boolean;
  @Input() comentarios: Comentario[];

  constructor(private _marchasServices: MarchaServiceService) {}
>>>>>>> forms
  ngOnInit(): void {
    if (this.comentarios.length > 0) {
      this.mostrados = true;
    }
  }
<<<<<<< HEAD
  post(){
   this.listas.push(this.comentario);
   this.comentario="";
   this.mostrardatos=true;

=======
  post() {
    console.log('agregado');
    this._marchasServices.postComentario(2, {
      nombre: 'Andrea',
      fecha: '02/05/2020',
      contenido: this.comentario,
    });
    this.comentario = '';
    this.mostrados = true;
>>>>>>> forms
  }
}
