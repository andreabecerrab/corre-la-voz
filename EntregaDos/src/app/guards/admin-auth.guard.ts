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

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
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
  }
}
