import { Component, OnInit } from '@angular/core';
//import { EspecilizadoService } from 'src/app/consultas-especilizadas/services/especilizado.service';

@Component({
  selector: 'app-consultas-esp',
  templateUrl: './consultas-esp.component.html',
  styleUrls: ['./consultas-esp.component.scss']
})
export class ConsultasEspComponent implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string='';
  productos:any=[{id:1, nombre:'Ron Centenario'}]
  constructor(/*private espservice:EspecilizadoService*/) { }
  

  ngOnInit(): void {
  }

  getConsulta3(){


  }
  setNombre(event:any){
    console.log(event.target.value);
  }
  setApellido(event:any){
    console.log(event.target.value);
  }
}
