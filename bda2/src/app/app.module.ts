import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './workflow/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultasGeneralesModule } from './consultas-generales/consultas-generales.module';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConsultasGeneralesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
