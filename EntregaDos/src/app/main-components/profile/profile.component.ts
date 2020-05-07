import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public usuario: Usuario;
  
  constructor(private userService:UsuarioServiceService) { 
  }

  ngOnInit(): void {
    this.usuario = this.userService.getUsuarios();
  }

}
