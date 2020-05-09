import { Inject, Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  //fakeData
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      correo: 'pedrop@gmail.com',
      contrasena: '12345',
      tipo: 'user',
    },
    {
      id: 1,
      nombre: 'Andrea',
      apellido: 'Perez',
      correo: 'andrea@gmail.com',
      contrasena: 'admin',
      tipo: 'admin',
    },
  ];
  //usefullData
  sessionLogin: boolean = false;
  sessionType: string;
  sessionData: any = this.storage.get('SESSION') || '';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private router: Router
  ) {}

  loginAction(user_email: string, password: string) {
    let user = this.usuarios.find((element) => element.correo === user_email);
    if (typeof user !== 'undefined') {
      this.sessionLogin = true;
      this.sessionType = user.tipo;

      this.storage.set('SESSION', { user: user_email, pass: password });
      this.sessionData = this.storage.get('SESSION');

      this.loginSession();
    } else {
      console.log('not found');
    }
  }

  loginSession() {
    if (this.sessionType === 'admin') {
      this.router.navigate(['/admin/inicio']);
    } else {
      this.router.navigate(['/usuario/inicio']);
    }
  }

  logoutAction() {
    this.storage.clear();
    this.sessionData = '';
    this.sessionType = '';
    this.router.navigate(['/login']);
  }
}
