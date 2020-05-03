import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Comentario } from 'src/app/models/Comentario';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  public comentario: '';
  public mostrados: boolean;
  @Input() comentarios: Comentario[];

  constructor(private _marchasServices: MarchaServiceService) {}
  ngOnInit(): void {
    if (this.comentarios.length > 0) {
      this.mostrados = true;
    }
  }
  post() {
    console.log('agregado');
    this._marchasServices.postComentario(2, {
      nombre: 'Andrea',
      fecha: '02/05/2020',
      contenido: this.comentario,
    });
    this.comentario = '';
    this.mostrados = true;
  }
}
