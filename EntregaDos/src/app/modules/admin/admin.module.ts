import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditStrikeComponent } from './components/edit-strike/edit-strike.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    TableStrikesComponent,
    EditStrikeComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [AdminDashboardComponent, TableStrikesComponent],
})
export class AdminModule {}
