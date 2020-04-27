import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//modules
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';
import { IndexComponent } from './modules/landingpage/components/index/index.component';
//components
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signin',
    component: SiginComponent,
  },
  //user
  {
    path: 'home',
    loadChildren: './modules/user/user.module#UserModule',
  },
  //admin
  {
    path: 'admin-home',
    loadChildren: './modules/admin/admin.module#AdminModule',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}