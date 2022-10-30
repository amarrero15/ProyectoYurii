import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-ranking',
  templateUrl: './brand-ranking.component.html',
  styleUrls: ['./brand-ranking.component.scss']
})
export class BrandRankingComponent implements OnInit {
  productos:any=[{nombre:'Coca-Cola', cantidad:1000},{nombre:'Pepsi', cantidad:850},{nombre:'Dr. Pepper', cantidad:700},{nombre:'Everest', cantidad:645},{nombre:'Postobon', cantidad:500},{nombre:'Inka-Cola', cantidad:250},{nombre:'Big Cola', cantidad:200}]
  constructor() { }

  ngOnInit(): void {
  }

}
