import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRankingComponent } from './components/product-ranking/product-ranking.component';
import { BrandRankingComponent } from './components/brand-ranking/brand-ranking.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { GeneralComponent } from './pages/general/general.component';
import { GeneralViewComponent } from './components/general-view/general-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ProductRankingComponent,
    BrandRankingComponent,
    GeneralComponent,
    GeneralViewComponent,
    ClientSearchComponent
  ],
  imports: [
    CommonModule
    ,FormsModule
    ,HttpClientModule
    ,MatButtonModule
    ,MatDividerModule
    ,MatGridListModule
    ,MatInputModule
    ,MatListModule
    ,MatTableModule
    ,ReactiveFormsModule
  ]
})
export class ConsultasGeneralesModule { }
