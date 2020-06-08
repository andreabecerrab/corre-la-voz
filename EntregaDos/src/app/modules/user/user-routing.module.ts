import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../services/interceptor.service';

import { UserhomeComponent } from './components/userhome/userhome.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ProfileComponent } from '../../main-components/profile/profile.component';
import { EditProfileComponent } from 'src/app/main-components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'inicio', component: UserhomeComponent },
  { path: 'marcha/:id', component: ResourcesComponent },
  { path: 'editar-perfil', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class UserRoutingModule {}
