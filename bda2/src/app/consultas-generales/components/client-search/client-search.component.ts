import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { GeneralService } from '../../services/general.service';
@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {
  columnas: string[] = ['producto', 'cantidad'];
  datos: any = []
  @ViewChild(MatTable) tabla1!: MatTable<any>;
  clientName='';
  clientLastName='';
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  productosXCliente(){
    const data ={
      nombre:this.clientName,
      apellido:this.clientLastName
    }

    this.generalService.getConsulta3(data).subscribe(res=>{
      this.datos=res;
    })
  }

}
