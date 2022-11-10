import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasEspComponent } from './pages/consultas-esp/consultas-esp.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Consulta3Component } from './components/consulta3/consulta3.component';

@NgModule({
  declarations: [
    //ConsultasEspComponent,
    Consulta3Component
  ],
  exports: [
    //ConsultasEspComponent,
    Consulta3Component
  ],
  imports: [
    CommonModule
    ,BrowserModule
    ,FormsModule
    ,MatDividerModule
    ,MatGridListModule
    ,MatListModule
    ,MatTableModule
    ,ReactiveFormsModule    
  ]
})
export class ConsultasEspecializadasModule { }
