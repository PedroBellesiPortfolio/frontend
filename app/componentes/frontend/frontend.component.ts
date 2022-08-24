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
  vers:boolean=true;
 

  constructor(
    private servicioInformacion : InformacionService
  ) { }

  ngOnInit(): void {
    this.vers=true;
    this.servicioInformacion.geteducacion().subscribe((response: educacioninterface []) => {this.datoseducacion = response;console.log(this.datoseducacion);
    });
    
    
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.datoseducacion);
        if (!this.datoseducacion.length) {window.location.reload()};
        if (this.datoseducacion.length) {this.vers=false;};
       
        
               
        
      }, 2000);
      
      
      
    });
    
    
    
    
    

    
  
  
    
    
  

}}
