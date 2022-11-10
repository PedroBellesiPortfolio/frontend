import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {proyectosinterface} from "../proyectosinterface"

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/proyectos';
  proyecto: proyectosinterface [] = [];

  constructor(
    private http:HttpClient
  ) { }

  
 public getproyectos(): Observable<proyectosinterface[]> {
  return this.http.get<proyectosinterface[]>(`${this.apiUrl}/ver`);
}

public postproyetos(idproyecto: any) {
  return this.http.post(`${this.apiUrl}/mas/`,idproyecto);
}

public putproyetos(idproyecto: any) {
  return this.http.put(`${this.apiUrl}/edita/`,idproyecto);
}

public deleteproyetos(idproyecto: any) {
  return this.http.delete(`${this.apiUrl}/borra/${idproyecto}`);
}

}
