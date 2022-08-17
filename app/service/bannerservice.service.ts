import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {bannerinterface} from "../bannerinterface"

@Injectable({
  providedIn: 'root'
})
export class BannerserviceService {
  private apiUrl = 'https://pedrobellesiportfolio.herokuapp.com/api/banner'

  constructor(
    private http:HttpClient
  ) { }

  public getbanner(): Observable<bannerinterface[]> {
    return this.http.get<bannerinterface[]>(`${this.apiUrl}/ver`);
  }

  public postbanner(idbanner: any) {
    return this.http.post(`${this.apiUrl}/mas/`,idbanner);
  }

}
