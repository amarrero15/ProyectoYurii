import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas-esp',
  templateUrl: './consultas-esp.component.html',
  styleUrls: ['./consultas-esp.component.scss']
})
export class ConsultasEspComponent implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string='';
  constructor() { }
  productos:any=[{nombre:'Coca-Cola', cantidad:1000},{nombre:'Pepsi', cantidad:850},{nombre:'Dr. Pepper', cantidad:700},{nombre:'Everest', cantidad:645},{nombre:'Postobon', cantidad:500},{nombre:'Inka-Cola', cantidad:250},{nombre:'Big Cola', cantidad:200}]

  ngOnInit(): void {
  }

}
