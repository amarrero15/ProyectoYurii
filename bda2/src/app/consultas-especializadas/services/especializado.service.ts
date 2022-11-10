import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspecializadoService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getConsulta3Cliente(data:any){
    return this.http.get(`${this.API_URI}/consulta3Clientes/${data.nombre}/clientes/${data.apellido}`);
  }

  getConsultaEsp1(id:any){
    return this.http.get(`${this.API_URI}/consultaEsp1/${id}`);
  }
}
