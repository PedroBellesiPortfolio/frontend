import { Component, OnInit } from '@angular/core';
import {bannerinterface} from "../../bannerinterface"
import { BannerserviceService } from '../../service/bannerservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {
  datosbanner: bannerinterface [] = [];
  

  constructor(private serviciobanner : BannerserviceService
    ) { }
  
    ngOnInit(): void {
      this.serviciobanner.getbanner().subscribe((response: bannerinterface []) => {this.datosbanner = response;
         });
    }

}
