import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasEspComponent } from './consultas-especializadas/pages/consultas-esp/consultas-esp.component';
import { GeneralComponent } from './consultas-generales/pages/general/general.component';
import { CargaComponent } from './datos/pages/carga/carga.component';



const routes: Routes = [
  {path: '', redirectTo: 'consultas-generales', pathMatch: 'full' }
  , { path:'consultas-generales', component:GeneralComponent}
  , { path:'carga-datos', component:CargaComponent}
  , { path:'consultas-esp', component:ConsultasEspComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
