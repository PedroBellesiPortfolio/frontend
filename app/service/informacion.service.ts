import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {educacioninterface} from "../educacioninterface"
//import {baseeducacion} from "../bdeducacion"

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/educacion'
  proyecto: educacioninterface [] = [];


  constructor(
    private http:HttpClient
  ) { }

 
 
  public geteducacion(): Observable<educacioninterface[]> {
    return this.http.get<educacioninterface[]>(`${this.apiUrl}/ver`);
  }
  
  public posteducacion(ideducacion: any) {
    return this.http.post(`${this.apiUrl}/mas/`,ideducacion);
  }
  
  public deleteeducacion(ideducacion: any) {
    return this.http.delete(`${this.apiUrl}/borra/${ideducacion}`);
}

}
