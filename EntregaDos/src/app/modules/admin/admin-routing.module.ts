import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './components/table-strikes/table-strikes.component';

const rutas: Routes = [
  { path: 'perfil', component: InformacionDisplayComponent },
  { path: 'edtiar-perfil', component: InformacionDisplayComponent },
  { path: 'agregar', component: AdminDashboardComponent },
  { path: 'editar', component: TableStrikesComponent },
];
