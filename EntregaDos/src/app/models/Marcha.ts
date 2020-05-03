import { Comentario } from '../models/Comentario';
export class Marcha {
  constructor(
    public id?: number,
    public img?: string,
    public nombre?: string,
    public fecha?: string,
    public hashtag?: string,
    public descripcion?: string,
    public direccion?: string,
    // public imagenes: [string] = [''],
    // public trafico: [string] = [''],
    // public marks: [string] = [''],
    public comentarios: Comentario[] = [{}]
  ) {}
}
