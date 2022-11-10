import { Component, OnInit } from '@angular/core';
import { EspecializadoService } from '../../services/especializado.service';
import { GeneralService } from 'src/app/consultas-generales/services/general.service';
@Component({
  selector: 'app-consulta3',
  templateUrl: './consulta3.component.html',
  styleUrls: ['./consulta3.component.scss']
})
export class Consulta3Component implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string='';
  productos:any=[]
  clientes:any=[]
  constructor(private espservice: EspecializadoService, private gse:GeneralService) { }

  ngOnInit(): void {
  }

  getConsulta3(){
    const data={
      nombre:this.nombreCliente,
      apellido:this.apellidoCliente
    }

    this.gse.getConsulta3(data).subscribe(res=>{
      this.productos=res;
    })
  }

  setNombre(event:any){
    console.log(event.target.value);
  }
  setApellido(event:any){
    console.log(event.target.value);
  }

  getConsultaesp1(event:any){
    console.log(event.target.value)
    this.espservice.getConsultaEsp1(event.target.value).subscribe(res=>{
      this.clientes=res;
      console.log(res);
    })
  }
}
