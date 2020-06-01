import { Injectable } from '@angular/core';
import { Marcha } from '../models/Marcha';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { Comentario } from '../models/Comentario';

@Injectable({
  providedIn: 'root',
})
export class MarchaServiceService {
  endpoint = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getMarchas(): Observable<Marcha[]> {
    return this.http.get<Marcha[]>(this.endpoint + '/marchas');
  }

  async addMarcha(body: FormData) {
    //this.http.post(this.endpoint + '/marchas', body);
    let data = await this.http.post(this.endpoint + '/marchas', body).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  async editMarcha(id: string, body: FormData) {
    let data = await this.http
      .put(this.endpoint + '/edit-marcha/' + id, body)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  async deleteMarcha(id: string) {
    let data = await this.http
      .delete(this.endpoint + '/delete-marcha/' + id)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  getMarcha(id: string): Observable<Marcha> {
    return this.http.get<Marcha>(this.endpoint + '/marcha/' + id);
  }

  async postComentario(id: string, comentario: Comentario) {
    let data = await this.http
      .put(this.endpoint + '/add-comment/' + id, comentario)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
