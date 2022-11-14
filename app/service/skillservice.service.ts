import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {skillinterface} from "../skillinterface"

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/skill'

  constructor(
    private http:HttpClient
  ) { }

  getskill(): Observable<skillinterface[]> {
   
  return this.http.get<skillinterface[]>(`${this.apiUrl}/ver`)
 }  

 public postskill(idskill: any): Observable<any>{
  return this.http.post(`${this.apiUrl}/mas/`,idskill);
}

public putskill(idskill: any, body2:any): Observable<any>{
  return this.http.put<any>(`${this.apiUrl}/edita/${idskill}`,body2);
}

public deleteskill(idskill: any): Observable<any> {
  return this.http.delete(`${this.apiUrl}/borra/${idskill}`);
}

}



