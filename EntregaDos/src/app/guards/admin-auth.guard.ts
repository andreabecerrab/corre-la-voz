import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
<<<<<<< HEAD
  private usuario;
  constructor(
    private userService: UsuarioServiceService,
    private router: Router
  ) {
    this.usuario = this.userService
      .getUserUpdatedListener()
      .subscribe((user) => (this.usuario = user));
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.usuario.tipo === 'admin') {
      return true;
    } else if (this.usuario.tipo === 'usuario') {
      this.router.navigate(['/usuario/inicio']);
      return false;
    }
=======
  private usuarioTipo;
  constructor(private userService:UsuarioServiceService, private router: Router, private auth: AuthenticationService) {
    this.userService.getUsuario();
    console.log(this.usuarioTipo);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.usuarioTipo = this.userService.getUserUpdatedListener().subscribe((data) => { 
        this.usuarioTipo = data.tipo;
        if(this.usuarioTipo !== 'admin'){
          this.router.navigate(['/perfil']);
          return false;
        } else {
          return true;
        }
      });
      return true;
>>>>>>> 858d93f8180df8a2be5cd4fa290a8a5d099d9c14
  }
}
