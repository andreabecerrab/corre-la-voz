import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  id: number = 2;
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      correo: 'pedrop@gmail.com',
      contrasena: '12345'
    }
  ];

  constructor() { }

  getUsuarios(): Usuario{
    return this.usuarios[0];
  }

  addUsuario(body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);
    json.id = this.id;

    this.usuarios.push(json);
    this.id++;
  }

  editUsuario(body: FormData) {
    let sbody = JSON.stringify(body);
    var json = JSON.parse(sbody);

    let original = this.usuarios.find((element) => element.id === 1);

    for (let property in json) {
      if (json[property] != '' && json[property] != null) {
        original[property] = json[property];
      }
    }
    console.log(this.usuarios);
  }

}
