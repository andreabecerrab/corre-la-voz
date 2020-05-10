import { Inject, Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

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
  public sessionLogin: boolean = false;
  sessionType: string;
  sessionData: any = this.storage.get('SESSION') || '';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private router: Router
  ) {}

  public get currentUserValue() {
    return this.storage.get('SESSION') || '';
  }

  getCurrent() {
    let t = this.storage.get('SESSION') || '';
    return t;
  }

  loginAction(user_email: string, password: string): void {
    let user = this.usuarios.find((element) => element.correo === user_email);
    if (typeof user !== 'undefined') {
      this.sessionLogin = true;
      this.sessionType = user.tipo;

      this.storage.set('SESSION', {
        user: user_email,
        pass: password,
        type: user.tipo,
      });
      this.sessionData = this.storage.get('SESSION');

      this.loginSession();
    } else {
      console.log('not found');
    }
  }
  //reload hasta hacer async
  loginSession(): void {
    if (this.sessionType === 'admin') {
      this.router.navigate(['/admin/inicio']);
    } else {
      this.router.navigate(['/usuario/inicio']);
    }
  }

  logoutAction(): void {
    this.storage.clear();
    this.sessionData = '';
    this.sessionType = '';
    this.router.navigate(['/login']);
  }
}
