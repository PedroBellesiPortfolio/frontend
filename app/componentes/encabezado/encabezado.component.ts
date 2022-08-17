import { Component, OnInit, OnDestroy } from '@angular/core';
import {redsocialinterface} from "../../redsocialinterface"
import { RedesserviceService } from '../../service/redesservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  datosredes: redsocialinterface [] = [];
  
 

  constructor(private servicioredsocial : RedesserviceService) { }

  ngOnInit(): void {
    this.servicioredsocial.getred().subscribe((response: redsocialinterface []) => {this.datosredes = response; console.log(this.datosredes)
    });


  }
  
  
  
  funcionDeAcceso(){
    console.log("hice click");
  }
}
