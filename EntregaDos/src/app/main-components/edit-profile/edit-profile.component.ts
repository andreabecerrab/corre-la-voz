import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {
  @Input() userSelected: Usuario;
  editUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _userService: UsuarioServiceService, private router: Router) {
    this.editUserForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      contrasena: [''],
      contrasenaconf: ['']
    });
  }

  ngOnInit(): void {}

  edit(){
    console.log(this.editUserForm.value);
    this._userService.editUsuario(this.editUserForm.value);
    this._userService.getUsuarios();
    this.editUserForm.reset();
    // this.router.navigate(['/usuario/perfil']);
  }

}
