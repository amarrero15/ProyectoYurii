import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GestionService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  agregarCliente(cliente: any){
    return this.http.post(`${this.API_URI}/agregarCliente`,cliente);
  }

  leerCliente(){
    return this.http.get(`${this.API_URI}/leerCliente/:nombre/productos/:apellido`);
  }
  editarCliente(data: any){
    return this.http.get(`${this.API_URI}/editarCliente`,data);
  }
  eliminarCliente(data: any){
    return this.http.get(`${this.API_URI}/eliminarCliente`,data);
  }
  totalCliente(){
    return this.http.get(`${this.API_URI}/totalClientes`);
  }

}
