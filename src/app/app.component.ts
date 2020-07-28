import { Component } from '@angular/core';
export interface Producto {
  cantidad: number;
  producto: string;
  devolver: number;
  estado: string;
}

const ELEMENT_DATA: Producto[] = [
  { producto: 'saca leche', cantidad: 1, devolver: 1, estado: 'Disponible' },
  {
    producto: 'parlante',
    cantidad: 1,
    devolver: 4,
    estado: 'Esperando Devolucion',
  },
  { producto: 'florero', cantidad: 1, devolver: 6, estado: 'Ocupado' },
  { producto: 'manteles', cantidad: 1, devolver: 9, estado: 'Disponible' },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GuemApp';
  displayedColumns: string[] = ['producto', 'cantidad', 'devolver', 'estado'];
  dataSource = ELEMENT_DATA;
}
