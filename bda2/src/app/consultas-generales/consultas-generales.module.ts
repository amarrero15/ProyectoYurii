import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRankingComponent } from './components/product-ranking/product-ranking.component';
import { BrandRankingComponent } from './components/brand-ranking/brand-ranking.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { GeneralComponent } from './pages/general/general.component';
import { GeneralViewComponent } from './components/general-view/general-view.component';

@NgModule({
  declarations: [
    ProductRankingComponent,
    BrandRankingComponent,
    GeneralComponent,
    GeneralViewComponent
  ],
  imports: [
    CommonModule
    ,MatDividerModule
    ,MatGridListModule
    ,MatListModule
  ]
})
export class ConsultasGeneralesModule { }
