import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Usuario } from '../../models/Usuario';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public usuario;
  
  constructor(private userService:UsuarioServiceService, public auth:AuthenticationService) { 
  }

  ngOnInit(): void {
    this.userService.getUsuario();
    this.usuario = this.userService.getUserUpdatedListener().subscribe((user) => (this.usuario = user));
  }

}
