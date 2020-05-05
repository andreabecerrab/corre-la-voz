import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';
import { ProfileComponent } from '../../main-components/profile/profile.component';
import { EditProfileComponent } from 'src/app/main-components/edit-profile/edit-profile.component';
import { EditStrikeComponent } from './components/edit-strike/edit-strike.component';
import { AdminGraphsComponent } from './components/admin-graphs/admin-graphs.component'

const routes: Routes = [
  { path: 'inicio', component: AdminDashboardComponent },
  { path: 'marchas', component: TableStrikesComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'editar-perfil', component: EditProfileComponent },
  { path: 'editar-marcha', component: EditStrikeComponent },
  { path: 'info', component: AdminGraphsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
