import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './consultas-generales/pages/general/general.component';
import { GestionGeneralComponent } from './gestion/pages/gestion-general/gestion-general.component';



const routes: Routes = [
  {path: '', redirectTo: 'consultas-generales', pathMatch: 'full' }
  , { path:'consultas-generales', component:GeneralComponent}
  , { path:'gestion-general', component:GestionGeneralComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
