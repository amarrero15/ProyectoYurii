import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  importarClientes(){
    return this.http.get(`${this.API_URI}/importarCliente`);
  }
  importarProductos(){
    return this.http.get(`${this.API_URI}/importarProducto`);
  }
  importarMarcas(){
    return this.http.get(`${this.API_URI}/importarMarca`);
  }
  importarCompras(){
    return this.http.get(`${this.API_URI}/importarCompras`);
  }
  relacionarProducto(){
    return this.http.get(`${this.API_URI}/relacionarProducto`);
  }
  relacionarCliente(){
    return this.http.get(`${this.API_URI}/relacionarCliente`);
  }
  relacionarMarca(){
    return this.http.get(`${this.API_URI}/relacionarMarca`);
  }
}
