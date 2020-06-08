import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

//modules
import { IndexComponent } from './modules/landingpage/components/index/index.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
<<<<<<< HEAD
import { ProfileComponent } from './main-components/profile/profile.component';
=======
import { ProfileComponent } from './main-components/profile/profile.component'
>>>>>>> 858d93f8180df8a2be5cd4fa290a8a5d099d9c14
//components

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },

  //user
  {
    path: 'usuario',
    loadChildren: './modules/user/user.module#UserModule',
    canActivate: [AuthGuard],
  },
  { 
    path: 'perfil', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },

  //admin
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  //perfil
  {
    path: 'perfil',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
