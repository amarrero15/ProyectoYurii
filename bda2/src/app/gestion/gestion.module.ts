import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionGeneralComponent } from './pages/gestion-general/gestion-general.component';

import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    GestionGeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
