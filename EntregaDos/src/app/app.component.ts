import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UsuarioServiceService } from './services/usuario-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'EntregaDos';
  userlogin: boolean = false;
  adminlogin: boolean = false;
  sessionType;
  public usuario;

  constructor(public authenticationService: AuthenticationService, public userService:UsuarioServiceService) {}

  ngOnInit(): void {
    this.userService.getUsuario();
    this.usuario = this.userService.getUserUpdatedListener().subscribe((user) => (this.usuario = user));
  }
}
