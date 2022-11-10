
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { GestionService } from '../../services/gestion.service';
@Component({
  selector: 'app-gestion-general',
  templateUrl: './gestion-general.component.html',
  styleUrls: ['./gestion-general.component.scss']
})
export class GestionGeneralComponent implements OnInit {
  nombreCliente:string='';
  apellidoCliente:string=''
  nuevoNombreCliente:string='';
  nuevoApellidoCliente:string=''
  
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
  constructor(private gestionService: GestionService) { }

  ngOnInit(): void {
  }

  crud(event:any){
    switch(event.target.value) { 
      case 'subir': { 
         //statements; 
         const data={
          nombreCliente:this.nombreCliente,
          apellidoCliente:this.apellidoCliente
         }
         this.gestionService.agregarCliente(data).subscribe(res=>{
          console.log(res);
          console.log('Cliente Agregado');
         });
         break; 
      } 
      case 'buscar': { 
        this.gestionService.totalCliente().subscribe(res=>{
          console.log(res);
         });
         break; 
      } 
      case 'cliente': { 
        this.gestionService.leerCliente().subscribe(res=>{
          console.log(res);
         });
         break; 
      } 
      case 'editar': { 
        const data={
          nombreCliente:this.nombreCliente,
          apellidoCliente:this.apellidoCliente,
          nuevoNombreCliente:this.nuevoNombreCliente,
          nuevoApellidoCliente:this.nuevoApellidoCliente
         }
        this.gestionService.editarCliente(data).subscribe(res=>{
          console.log(res);
         });
        break; 
     } 
     case 'elimiar': { 
      const data={
        nombreCliente:this.nombreCliente,
        apellidoCliente:this.apellidoCliente
       }
      this.gestionService.eliminarCliente(data).subscribe(res=>{
        console.log(res);
       });
      break; 
     } 

      default: { 
         console.log('Esta sección no hace nada') 
         break; 
      } 
   }
  }

}
