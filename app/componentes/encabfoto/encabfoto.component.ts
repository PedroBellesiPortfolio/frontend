import { Component, OnInit } from '@angular/core';
import {bannerinterface} from "../../bannerinterface"
import {personainterface} from "../../personainterface"
import { BannerserviceService } from '../../service/bannerservice.service';
import { PersonaserviceService } from '../../service/personaservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encabfoto',
  templateUrl: './encabfoto.component.html',
  styleUrls: ['./encabfoto.component.css']
})
export class EncabfotoComponent implements OnInit {
  datosbanner: bannerinterface [] = [];
  datospersona: personainterface [] = [];
  

  constructor(
    private serviciobanner : BannerserviceService,
    private serviciopersona : PersonaserviceService
  ) { }

  ngOnInit(): void {
    this.serviciobanner.getbanner().subscribe((response: bannerinterface []) => {this.datosbanner = response;
       });
    this.serviciopersona.getpersona().subscribe((response: personainterface []) => {this.datospersona = response;
       });
  }

}
