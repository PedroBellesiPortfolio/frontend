import { Component, OnInit, Output} from '@angular/core';
import {skillinterface} from "../../skillinterface"
import { SkillserviceService } from '../../service/skillservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  datosskill: skillinterface [] = [];
  datosskill2: skillinterface [] = [];
  x!: any[];
  value: number=0;
  value2: number=0;
 
  
  
 


  constructor(
    private servicioskill : SkillserviceService
    
  ) { }

  

 
ngOnInit() {
 
  
  this.servicioskill.getskill().subscribe((response: skillinterface []) => {this.datosskill2 = response;
    console.log(this.datosskill2); });
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(this.datosskill2)
      this.datosskill=this.datosskill2;
      
      this.datosskill.sort((a, b) => {
            return a.orden_skill - b.orden_skill;
        }); 
    }, 4000);
    
  });
  console.log(this.datosskill2)};






getvalue(d: any) {
  
  let skillindividual=d;
  

    if (skillindividual.porcentaje>50) {
    this.value=((skillindividual.porcentaje)-50)/50*180;
    this.value2=180;}
    else {
    this.value=0;
    this.value2=(skillindividual.porcentaje)/50*180;

    };
   return (this.value)
}

getColor1(ex: any) {
  let skillindividualid=ex;
  let toString1 = skillindividualid.orden_skill.toString();
  let ultimocaracte=toString1.charAt(toString1.length - 1);
  let contadorcolorskill=parseInt(ultimocaracte);
  let color: string='#e0dd0d';

  switch (contadorcolorskill) {
    case 0:
    case 5:
      return color = '#049dff';
    case 1:
    case 6:
      return color = '#b205c5';
    case 2:
    case 7:
      return color = '#eb5f5f';
    case 3:
    case 8:
      return color = '#07e61d';
  };

  return color;
}

}