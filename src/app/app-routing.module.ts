import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormularioComponent} from './ejemplo/formulario/formulario.component';
import {ResumenComponent} from './ejemplo/resumen/resumen.component';

import { FormProductoComponent } from './componentes/producto/form-producto/form-producto.component';
import { IndexProductoComponent } from './componentes/producto/index-producto/index-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'indexproducto', pathMatch: 'full' },
  { path: 'formularioproducto', component: FormProductoComponent },
  { path: 'indexproducto', component: IndexProductoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'resumen', component: ResumenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
