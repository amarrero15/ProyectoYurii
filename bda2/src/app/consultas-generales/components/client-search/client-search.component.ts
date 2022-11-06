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
  clientName:string='';
  clientLastName:string='';
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  productosXCliente(){
    const data ={
      nombre:this.clientName.toString(),
      apellido:this.clientLastName.toString()
    }
    console.log(data);
    this.generalService.getConsulta3(data).subscribe(res=>{
      this.datos=res;
    })
  }

}
