import { Component, OnInit } from '@angular/core';
import {educacioninterface} from "../../educacioninterface"
import { InformacionService } from '../../service/informacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  datoseducacion:educacioninterface [] = [];
  datoseducacion2:educacioninterface [] = [];

  constructor(
    private servicioInformacion : InformacionService
  ) {
    
   }

  ngOnInit(): void {

    
    this.servicioInformacion.geteducacion().subscribe((response: educacioninterface []) => {this.datoseducacion = response;
    });
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.datoseducacion2)
        this.datoseducacion2=this.datoseducacion;
        
        this.datoseducacion2.sort((a, b ) => {
              return a.orden_titulo - b.orden_titulo;
          }); 
      }, 3000);
      
    });

  }

 // ngOnInit() {
 //   this.getinformacion();
 // }

//  public getinformacion() {
//    this.datoseducacion$ = this.servicioInformacion.getinformacion();
 // }


}
