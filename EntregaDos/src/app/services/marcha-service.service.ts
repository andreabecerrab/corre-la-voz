import { Injectable } from '@angular/core';
import { Marcha } from '../models/Marcha';
import {HttpClient,HttpHeaders,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,retry,catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MarchaServiceService {
  endpoint= 'http://localhost:8081/api/marchas';
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

  constructor(private http:HttpClient) {}
  private extaData(res:Response){
    let body=res;
    return body || {};
  }

  getMarchas(): Observable<any>{
    return this.http.get(this.endpoint);
  }
  //prueba para segunda entrega despues --> DB
  addMarcha(body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);
    json.id = this.id;
    json.comentarios = [];

    this.http.post(this.endpoint,json);
    this.id++;
  }
  editMarcha(id, body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);
    this.http.put(this.endpoint+"/edit-marcha/"+id,json);

  }

  deleteMarcha(id) {
    this.http.delete(this.endpoint+ "/delete-marcha/"+id);
  }

   
  getMarcha(id) {
    return this.http.get(this.endpoint+"/marcha/"+id);
  }
  postComentario(id, comentario) {
     this.http.post(this.endpoint+"/add-comment/"+id,comentario);
  }
}
