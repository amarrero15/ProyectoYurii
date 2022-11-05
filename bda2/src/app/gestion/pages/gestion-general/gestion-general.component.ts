
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-gestion-general',
  templateUrl: './gestion-general.component.html',
  styleUrls: ['./gestion-general.component.scss']
})
export class GestionGeneralComponent implements OnInit {
  columnas: string[] = ['producto', 'cantidad'];
  columnasCliente: string[] = ['id', 'nombre', 'apellido'];
  datos: any[] = [{nombre:'Magnotta Bel Paese', cantidad:'1'},{nombre:'Broom-Push', cantidad:'2'},{nombre:'Sauce-Soya,Light', cantidad:'3'}]
  datosCliente: any[] = [
    {id:1,nombre:'Barry', apellido:'Allen'}
    ,{id:2,nombre:'Diana', apellido:'Prince'}
    ,{id:3,nombre:'Bruce', apellido:'Wayne'}
    ,{id:4,nombre:'Clark', apellido:'Kent'}
    ,{id:5,nombre:'Laurel', apellido:'Lance'}
    ,{id:6,nombre:'Oliver', apellido:'Queen'}
    ,{id:7,nombre:'Shayera', apellido:'Hol'}
    ,{id:8,nombre:'Zatanna', apellido:'Zatara'}]
  @ViewChild(MatTable) tabla1!: MatTable<any>;
  @ViewChild(MatTable) tabla2!: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
