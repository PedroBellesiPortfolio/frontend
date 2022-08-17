import { Component, OnInit } from '@angular/core';
import {experienciainterface} from "../../experienciainterface"
import {ExperienciaserviceService } from '../../service/experienciaservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  datosexperiencia: experienciainterface [] = [];
  datosexperiencia2: experienciainterface [] = [];
  

  constructor(
    private serviciosexperiencia : ExperienciaserviceService
  ) { }

  ngOnInit(): void {
    this.serviciosexperiencia.getexperiencia().subscribe((response: experienciainterface []) => {this.datosexperiencia = response;
    });
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.datosexperiencia2)
        this.datosexperiencia2=this.datosexperiencia;
        
        this.datosexperiencia2.sort((a, b) => {
              return a.orden_experiencia - b.orden_experiencia;
          }); 
      }, 2000);
      
    });


  }

}
