import { Component, OnInit } from '@angular/core';
import { EspecilizadoService } from 'src/app/consultas-especilizadas/services/especilizado.service';

@Component({
  selector: 'app-consultas-esp',
  templateUrl: './consultas-esp.component.html',
  styleUrls: ['./consultas-esp.component.scss']
})
export class ConsultasEspComponent implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string='';
  productos:any=[]
  constructor(private espservice:EspecilizadoService) { }
  

  ngOnInit(): void {
  }

  getConsulta3(){
    const data={
      nombre:this.nombreCliente,
      apellido:this.apellidoCliente
    }

    this.espservice.getConsulta3Cliente(data).subscribe(res=>{
      this.productos=res
    })

  }
}
