import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './consultas-generales/pages/general/general.component';

const routes: Routes = [
  {path: '', redirectTo: 'consultas-generales', pathMatch: 'full' }
  , { path:'consultas-generales', component:GeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
