import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
})
export class SiginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _userService: UsuarioServiceService, private router: Router) {
    this.userForm = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  post() {
    this.userForm.reset();
    this.router.navigate(['/login']);
  }

}
