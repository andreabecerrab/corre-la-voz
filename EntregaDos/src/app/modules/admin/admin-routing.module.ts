import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../services/interceptor.service';
//components
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';
import { ProfileComponent } from '../../main-components/profile/profile.component';
import { AdminGraphComponent } from './components/admin-graph/admin-graph.component';

const routes: Routes = [
  { path: 'inicio', component: AdminDashboardComponent },
  { path: 'marchas', component: TableStrikesComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'info', component: AdminGraphComponent },
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
export class AdminRoutingModule {}
