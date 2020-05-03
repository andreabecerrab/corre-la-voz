import { Injectable } from '@angular/core';
import { Marcha } from '../models/Marcha';

@Injectable({
  providedIn: 'root',
})
export class MarchaServiceService {
  id: number = 5;
  marchas: Marcha[] = [
    {
      id: 1,
      img: '/assets/img/cc.jpg',
      nombre: 'Juntos contra el COVID-19',
      fecha: '2020-05-12',
      hashtag: '#TodosJuntos',
      descripcion:
        'lucha para convatir la  covid y dar consiencia a los jovenes',
      direccion: 'Tu casa',
      comentarios: [
        { nombre: 'Andrea', fecha: '20/02/2020', contenido: 'Comentario1' },
        { nombre: 'Andrea', fecha: '20/02/2020', contenido: 'Comentario2' },
        { nombre: 'Andrea', fecha: '20/02/2020', contenido: 'Comentario3' },
      ],
    },
    {
      id: 2,
      img: '/assets/img/future.jpg',
      nombre: 'Fridays 4 Future',
      fecha: '2020-09-12',
      hashtag: '#Fridays4Future',
      descripcion: 'lucha para convatir el cambio climatico',
      direccion: 'Reforma',
      comentarios: [
        { nombre: 'Andrea', fecha: '20/02/2020', contenido: 'Comentario1' },
      ],
    },
    {
      id: 3,
      img: '/assets/img/mujer.jpg',
      nombre: 'Ni una menos',
      fecha: '2020-03-14',
      hashtag: '#NiUnaMenos',
      descripcion:
        'el “ya basta” de las mujeres contra la violencia de género.',
      direccion: 'Mexico',
      comentarios: [{}],
    },
  ];

  constructor() {}
  getMarchas() {
    return this.marchas;
  }
  //prueba para segunda entrega
  addMarcha(body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);
    json.id = this.id;
    json.comentarios = [];

    this.marchas.push(json);
    this.id++;
  }
  editMarcha(id, body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);

    let original = this.marchas.find((element) => element.id === id);

    for (let property in json) {
      if (json[property] != '' && json[property] != null) {
        original[property] = json[property];
      }
    }
  }
  deleteMarcha(id) {
    for (let i = 0; i < this.marchas.length; i++) {
      if (this.marchas[i].id === id) {
        this.marchas.splice(i--, 1);
      }
    }
  }
  getMarcha(id) {
    return this.marchas.find((e) => e.id === id);
  }
  postComentario(id, comentario) {
    this.marchas.find((e) => e.id === id).comentarios.push(comentario);
  }
}
