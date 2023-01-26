import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBusquedaComponent } from './form-busqueda/form-busqueda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {ValesalidaComponent} from './valesalida/valesalida.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';

const routes: Routes = [
  { path: 'cars', component: FormBusquedaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'detailMaterial/:id', component: MaterialDetailComponent },
  { path: 'valesalida', component: ValesalidaComponent },
  { path: '', redirectTo: '/valesalida', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
