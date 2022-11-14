import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {experienciainterface} from "../experienciainterface"

@Injectable({
  providedIn: 'root'
})
export class ExperienciaserviceService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/experiencia'

  constructor(
    private http:HttpClient
  ) { }

 
 
 public getexperiencia(): Observable<experienciainterface[]> {
  return this.http.get<experienciainterface[]>(`${this.apiUrl}/ver`);
}
public postexperiencia(idexperiencia: any) {
  return this.http.post(`${this.apiUrl}/mas/`,idexperiencia);
}

public putexperiencia(idexperiencia: any,body2:any) {
  return this.http.put(`${this.apiUrl}/edita/${idexperiencia}`,body2);
}

public deleteexperiencia(idexperiencia: any) {
  return this.http.delete(`${this.apiUrl}/borra/${idexperiencia}`);
}


}
