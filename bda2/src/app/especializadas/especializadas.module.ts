import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasEspComponent } from './pages/consultas-esp/consultas-esp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultasEspComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EspecializadasModule { }
