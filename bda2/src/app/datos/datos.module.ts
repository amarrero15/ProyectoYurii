import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLoadComponent } from './components/data-load/data-load.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CargaComponent } from './pages/carga/carga.component';


@NgModule({
  declarations: [
    DataLoadComponent,
    CargaComponent
  ],
  exports: [
    DataLoadComponent,
    CargaComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class DatosModule { }
