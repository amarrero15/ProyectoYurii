
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-gestion-general',
  templateUrl: './gestion-general.component.html',
  styleUrls: ['./gestion-general.component.scss']
})
export class GestionGeneralComponent implements OnInit {
  columnas: string[] = ['producto', 'cantidad'];
  datos: any[] = [{nombre:'Magnotta Bel Paese', cantidad:'1'},{nombre:'Broom-Push', cantidad:'2'},{nombre:'Sauce-Soya,Light', cantidad:'3'}]
  @ViewChild(MatTable) tabla1!: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
