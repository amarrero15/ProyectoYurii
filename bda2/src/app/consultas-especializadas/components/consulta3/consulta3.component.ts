import { Component, OnInit } from '@angular/core';
import { EspecializadoService } from '../../services/especializado.service';

@Component({
  selector: 'app-consulta3',
  templateUrl: './consulta3.component.html',
  styleUrls: ['./consulta3.component.scss']
})
export class Consulta3Component implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string='';
  productos:any=[]
  constructor(private espservice: EspecializadoService) { }

  ngOnInit(): void {
  }

  getConsulta3(){
    const data={
      nombre:this.nombreCliente,
      apellido:this.apellidoCliente
    }

    this.espservice.getConsulta3Cliente(data).subscribe(res=>{
      this.productos=res;
    })
  }

  setNombre(event:any){
    console.log(event.target.value);
  }
  setApellido(event:any){
    console.log(event.target.value);
  }

}
