import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-data-load',
  templateUrl: './data-load.component.html',
  styleUrls: ['./data-load.component.scss']
})
export class DataLoadComponent implements OnInit {

  constructor(
      private route: Router
    , private dataService:DataService
    ) { }

  ngOnInit(): void {
  }

  goToPage(event: any){
    this.route.navigate([event.target.value]);
  }

  loadData(event:any){
    switch(event.target.value) { 
      case 'clientes': { 
         //statements; 
         this.dataService.importarClientes().subscribe(res=>{
          console.log(res);
         });
         break; 
      } 
      case 'productos': { 
        this.dataService.importarProductos().subscribe(res=>{
          console.log(res);
         });
         break; 
      } 
      case 'marcas': { 
        this.dataService.importarMarcas().subscribe(res=>{
          console.log(res);
         });
        break; 
     } 
     case 'compras': { 
      this.dataService.importarCompras().subscribe(res=>{
        console.log(res);
       });
      break; 
     } 
     case 'relaciones': { 
      this.dataService.relacionarCliente().subscribe(res=>{
        console.log(res);
       });
       this.dataService.relacionarProducto().subscribe(res=>{
        console.log(res);
       });
       this.dataService.relacionarMarca().subscribe(res=>{
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
