import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
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
  }
  
}
