import { Component, OnInit, Input } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Comentario } from 'src/app/models/Comentario';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s ease-out', style({ opacity: 2 })),
      ]),
    ]),
  ],
})
export class CommentsComponent implements OnInit {
  public comentario: '';
  public mostrados: boolean;
  @Input() comentarios: Comentario[];
  @Input() id: string;

  constructor(private _marchasServices: MarchaServiceService) {}
  ngOnInit(): void {
    if (this.comentarios.length > 0) {
      this.mostrados = true;
    }
  }
  post() {
    var date = new Date().toISOString().split('T')[0];
    console.log(date);

    this._marchasServices.postComentario(this.id, {
      nombre: 'Andrea',
      fecha: date,
      contenido: this.comentario,
    });

    this.comentario = '';
    this.mostrados = true;
  }
}
