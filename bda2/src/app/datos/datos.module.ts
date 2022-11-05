import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataLoadComponent } from './components/data-load/data-load.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CargaComponent } from './pages/carga/carga.component';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
    MatTabsModule,
  ]
})
export class DatosModule { }
