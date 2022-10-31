import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionGeneralComponent } from './pages/gestion-general/gestion-general.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    GestionGeneralComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class GestionModule { }
