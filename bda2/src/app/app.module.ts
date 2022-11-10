import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './workflow/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultasGeneralesModule } from './consultas-generales/consultas-generales.module';
import { GestionModule } from './gestion/gestion.module';
import { DatosModule } from './datos/datos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConsultasGeneralesModule,
    GestionModule,
    DatosModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
