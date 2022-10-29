import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalMaintenanceComponent } from './components/principal-maintenance/principal-maintenance.component';
import { FileLoaderComponent } from './components/file-loader/file-loader.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';



@NgModule({
  declarations: [
    PrincipalMaintenanceComponent,
    FileLoaderComponent,
    ClientListComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
