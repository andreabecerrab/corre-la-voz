import { Injectable } from '@angular/core';
import { Marcha } from '../models/Marcha';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { Comentario } from '../models/Comentario';

@Injectable({
  providedIn: 'root',
})
export class MarchaServiceService {
  private marchas: Marcha[] = [];
  private marcha: Marcha = null;
  private marchaUpdated = new Subject<Marcha[]>();
  private marchaSelected = new Subject<Marcha>();
  public totalPosts;
  public total;
  private totalPostsListener = new Subject<number>();

  //pagination
  //totalPost = 10;

  constructor(private http: HttpClient) {}
  endpoint = 'http://localhost:8081/api';

  getMarchas(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;

    this.http
      .get<Marcha[]>(this.endpoint + '/marchas' + queryParams)
      .subscribe((data) => {
        this.totalPosts = data['maxPosts'];
        this.totalPostsListener.next(this.totalPosts);
        this.marchas = data['marchas'];
        this.marchaUpdated.next([...this.marchas]);
      });
     
  }

  getTotalPosts() {
    console.log(this.totalPosts);
   
    return this.totalPostsListener.asObservable();
    
  }

  


  getMarchasUpdatedListener() {
    return this.marchaUpdated.asObservable();
  }

  getMarcha(id: string) {
    return this.http
      .get<Marcha>(this.endpoint + '/marcha/' + id)
      .subscribe((data) => {
        this.marcha = data;
        this.marchaSelected.next(this.marcha);
      });
  }
  getMarchaUpdatedListener() {
    return this.marchaSelected.asObservable();
  }

  getTotal(){
    // console.log(this.total);
    return this.http.get(this.endpoint + '/total');
  }


  async addMarcha(
    nombre: string,
    fecha: string,
    desc: string,
    hashtag: string,
    direccion: string,
    img: File
  ) {
    //body.append('img', body.img, body.img.name);

    var formData: any = new FormData();
    formData.append('nombre', nombre);
    formData.append('fecha', fecha);
    formData.append('desc', desc);
    formData.append('hashtag', hashtag);
    formData.append('direccion', direccion);
    formData.append('img', img, nombre);

    this.http.post(this.endpoint + '/marchas', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  async editMarcha(id: string, body: FormData) {
    //for observable
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);

    let original = this.marchas.find((element) => element._id === id);

    this.http.put(this.endpoint + '/edit-marcha/' + id, body).subscribe(
      (response) => {
        for (let property in json) {
          if (json[property] != '' && json[property] != null) {
            if (property == 'direccion') {
              original[property] = {
                latitude: 0,
                longitude: 0,
                location: '',
                address: json[property],
              };
            } else {
              original[property] = json[property];
            }
          }
        }
      },
      (error) => console.log(error)
    );
  }

  deleteMarcha(id: string, postsPerPage: number, currentPage: number) {
    this.http.delete(this.endpoint + '/delete-marcha/' + id).subscribe(
      (response) => {
        this.getMarchas(postsPerPage, currentPage);
        for (let i = 0; i < this.marchas.length; i++) {
          if (this.marchas[i]._id === id) {
            this.marchas.splice(i--, 1);
          }
        }
      },
      (error) => console.log(error)
    );
  }

  //user interactions
  postComentario(id: string, comentario: Comentario) {
    this.http.put(this.endpoint + '/add-comment/' + id, comentario).subscribe(
      (response) => {
        this.getMarcha(id);
        this.marcha.comentarios.push(comentario);
      },
      (error) => console.log(error)
    );
  }

  postImage(id: string, img: File) {
    //this.marcha.comentarios.push();
    console.log(img);

    var formData: any = new FormData();
    formData.append('img', img);

    this.http.put(this.endpoint + '/add-img/' + id, formData).subscribe(
      (response) => this.getMarcha(id),
      (error) => console.log(error)
    );
  }

  addPoint(id: string, titulo: string, lat: any, lng: any) {
    //this.marcha.comentarios.push();

    var punto = {
      title: titulo,
      latitude: lat,
      longitude: lng,
    };

    this.http.put(this.endpoint + '/add-marker/' + id, punto).subscribe(
      (response) => {
        this.getMarcha(id);
        this.marcha.puntosLoc.push(punto);
      },
      (error) => console.log(error)
    );
  }
}
