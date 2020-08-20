import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormReservaComponent } from './form-reserva/form-reserva.component';
import { FormNuevoprodComponent } from './form-nuevoprod/form-nuevoprod.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form-reserva',
    component: FormReservaComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'form-nuevoprod',
    component: FormNuevoprodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
