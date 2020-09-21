import { Comentario } from '../models/Comentario';
export class Marcha {
  constructor(
    public _id?: string,
    public img?: string,
    public nombre?: string,
    public fecha?: string,
    public hashtag?: string,
    public descripcion?: string,
    public direccion?: Direccion,
    public imgs: [string] = [''],
    // public trafico: [string] = [''],
    public puntosLoc: [any] = [''],
    public comentarios = []
  ) {}
}

class Direccion {
  constructor(
    public latitude?: number,
    public longitude?: number,
    public location?: string,
    public address?: string
  ) {}
}
