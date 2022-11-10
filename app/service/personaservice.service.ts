import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {personainterface} from "../personainterface"

@Injectable({
  providedIn: 'root'
})
export class PersonaserviceService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/persona'

  constructor(
    private http:HttpClient
  ) { }

  public getpersona(): Observable<personainterface[]> {
    return this.http.get<personainterface[]>(`${this.apiUrl}/ver`);
     }
 // public postpersona(idpersona: any) {
 //   return this.http.post(`${this.apiUrl}/mas/`,idpersona);
 //   }

    public putpersona(idpersona: any) {
      return this.http.put(`${this.apiUrl}/edita/`,idpersona);
      }


}
