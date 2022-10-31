import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getConsulta1(){
    return this.http.get(`${this.API_URI}/consulta1`);
  }

  getConsulta2(){
    return this.http.get(`${this.API_URI}/consulta2`);
  }
}
