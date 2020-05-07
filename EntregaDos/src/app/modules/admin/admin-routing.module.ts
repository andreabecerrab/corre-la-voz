import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
})
export class AdminRoutingModule {}
