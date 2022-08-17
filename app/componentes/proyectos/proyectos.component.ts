import { Component, OnInit } from '@angular/core';
import {proyectosinterface} from "../../proyectosinterface"
import {ProyectosService } from '../../service/proyectosservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  datosproyectos: proyectosinterface [] = [];
  datosproyectos2: proyectosinterface [] = [];
  

  constructor(
    private serviciosproyectos : ProyectosService

  ) { }

  ngOnInit(): void {
    this.serviciosproyectos.getproyectos().subscribe((response: proyectosinterface []) => {this.datosproyectos = response;
       });
       var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(this.datosproyectos2)
          this.datosproyectos2=this.datosproyectos;
          
          this.datosproyectos2.sort((a, b) => {
                return a.orden_proyectos - b.orden_proyectos;
            }); 
        }, 2000);
        
      });
 
 
      }

}
