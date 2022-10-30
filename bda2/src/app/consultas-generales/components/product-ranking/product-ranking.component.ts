import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
@Component({
  selector: 'app-product-ranking',
  templateUrl: './product-ranking.component.html',
  styleUrls: ['./product-ranking.component.scss']
})
export class ProductRankingComponent implements OnInit {
  ranking:any=[];
  productos:any=[{nombre:'Coca-Cola', cantidad:1000},{nombre:'Pepsi', cantidad:850},{nombre:'Dr. Pepper', cantidad:700},{nombre:'Everest', cantidad:645},{nombre:'Postobon', cantidad:500},{nombre:'Inka-Cola', cantidad:250},{nombre:'Big Cola', cantidad:200}]
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  getProductRanking(){
    this.generalService.getConsulta1().subscribe(res=>{
      this.ranking=res;
    })
  }

}
