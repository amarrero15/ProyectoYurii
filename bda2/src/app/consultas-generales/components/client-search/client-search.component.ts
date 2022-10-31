import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {
  columnas: string[] = ['producto', 'cantidad'];
  datos: any[] = [{nombre:'Magnotta Bel Paese', cantidad:'1'},{nombre:'Broom-Push', cantidad:'2'},{nombre:'Sauce-Soya,Light', cantidad:'3'}]
  @ViewChild(MatTable) tabla1!: MatTable<any>;
  clientName='';
  clientLastName='';
  constructor() { }

  ngOnInit(): void {
  }

}
