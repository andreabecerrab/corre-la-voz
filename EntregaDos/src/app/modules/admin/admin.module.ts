import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditStrikeComponent } from './components/edit-strike/edit-strike.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGraphComponent } from './components/admin-graph/admin-graph.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    TableStrikesComponent,
    EditStrikeComponent,
    AdminGraphComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  exports: [AdminDashboardComponent, TableStrikesComponent],
})
export class AdminModule {}
