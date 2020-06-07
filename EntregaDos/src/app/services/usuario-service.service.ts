import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { AuthenticationService } from './authentication.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  usuario: Usuario;
  userUpdated = new Subject<Usuario>();

  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  endpoint = 'http://localhost:8081/auth';

  getUsuario() {
    return this.http
      .get<Usuario>(this.endpoint + '/usuario')
      .subscribe((data) => {
        this.usuario = data;
        this.userUpdated.next(this.usuario);
        // console.log(this.usuario);
      });
  }

  getUserUpdatedListener() {
    return this.userUpdated.asObservable();
  }

  editUsuario(body: FormData) {
    this.http.put(this.endpoint + '/edit/usuario', body).subscribe(
      (response) => console.log('Edited'),
      (error) => console.log(error)
    );
  }
}
