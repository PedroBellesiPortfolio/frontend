import { Component, OnInit } from '@angular/core';
import {educacioninterface} from "../../educacioninterface"
import { InformacionService } from '../../service/informacion.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
  datoseducacion:educacioninterface [] = [];
 

  constructor(
    private servicioInformacion : InformacionService
  ) { }

  ngOnInit(): void {
    this.servicioInformacion.geteducacion().subscribe((response: educacioninterface []) => {this.datoseducacion = response;
    });

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.datoseducacion);
        
        
      }, 3000);
      
    });

  
  
    if (this.datoseducacion==null) window.location.reload();
    
    
  

}}
