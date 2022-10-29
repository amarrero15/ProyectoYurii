import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspQueryComponent } from './components/esp-query/esp-query.component';
import { GenQueryComponent } from './components/gen-query/gen-query.component';
import { ProductRankingComponent } from './components/product-ranking/product-ranking.component';



@NgModule({
  declarations: [
    EspQueryComponent,
    GenQueryComponent,
    ProductRankingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QueriesModule { }
