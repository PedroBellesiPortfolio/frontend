import { Component, OnInit, Input } from '@angular/core';
import {bannerinterface} from "../../bannerinterface"
import { BannerserviceService } from '../../service/bannerservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  datosbanner: bannerinterface [] = [];
  

  constructor(
    private serviciobanner : BannerserviceService
  ) { }

  ngOnInit(): void {
    this.serviciobanner.getbanner().subscribe((response: bannerinterface []) => {this.datosbanner = response;
       });
  }

}
