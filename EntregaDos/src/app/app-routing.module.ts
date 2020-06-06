import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

//modules
import { IndexComponent } from './modules/landingpage/components/index/index.component';
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

  //admin
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
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
