import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {redsocialinterface} from "../redsocialinterface"

@Injectable({
  providedIn: 'root'
})
export class RedesserviceService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/redsocial'

  constructor(
    private http:HttpClient
  ) { }

  public getred(): Observable<redsocialinterface[]> {
    return this.http.get<redsocialinterface[]>(`${this.apiUrl}/ver`);
  }

  public postred(idred: any) {
    return this.http.post(`${this.apiUrl}/mas/`,idred);
    }

}
