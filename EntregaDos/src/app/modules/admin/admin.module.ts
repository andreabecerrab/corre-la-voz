import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminDashboardComponent, TableStrikesComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminDashboardComponent, TableStrikesComponent],
})
export class AdminModule {}
