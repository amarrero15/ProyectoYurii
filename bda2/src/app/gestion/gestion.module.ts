import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPanelComponent } from './components/management-panel/management-panel.component';
import { GestionesComponent } from './pages/gestiones/gestiones.component';



@NgModule({
  declarations: [
    ManagementPanelComponent,
    GestionesComponent
  ],
  exports: [
    ManagementPanelComponent,
    GestionesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GestionModule { }
