import { Component, OnInit } from '@angular/core';
import {skillinterface} from "../../../skillinterface"
import {SkillserviceService } from '../../../service/skillservice.service';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop' ;
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-skillsedit',
  templateUrl: './skillsedit.component.html',
  styleUrls: ['./skillsedit.component.css']
})
export class SkillseditComponent implements OnInit {
  
  datosskill: skillinterface [] = [];
  datosskill2: skillinterface [] = [];
  datosskill3: skillinterface [] = [];
  datosskill4: skillinterface [] = [];
  datosaborrar: skillinterface [] = [];
  datosproyectosamodificar: skillinterface [] = [];
  x:number=0;
  ventanaNuevoItem:boolean=false;
  
  orden1: number=0;
  ordeskill: number=0;
  idskillreferencia:number=1;
  idskill:number=0;
  form: any;

  titulo_skill:string="Titulo del Skill";
  porcentaje:any="Porcentaje del Skill";
  editask: any;

  constructor(
    private serviciosskill : SkillserviceService,
    private f_builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.editask=0;
    this.form = this.f_builder.group({
      titulo_skill:[''],
      porcentaje: [0,[
        Validators.pattern("[0-9]+"),Validators.min(0), Validators.max(100)
      ]]      
    }); 
    //location.href="webeditable#xsk1";
    
 
   this.onget();
   
  
      
  }

  onget(){
    this.serviciosskill.getskill().subscribe((response: skillinterface []) => {this.datosskill = response;
    });
    var promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log(this.datosskill2)
       this.datosskill2=this.datosskill;
       
       this.datosskill2.sort((a, b) => {
             return a.orden_skill - b.orden_skill;
         }); 
     }, 1000);
     
   });
   

  }


  onClickDelete (datosskill3: any){
   
   if (confirm("seguro que desea eliminar?")){
   if  (datosskill3.idskills==this.datosskill4[0]) {} else {
   this.serviciosskill.deleteskill(datosskill3.idskills)
    .subscribe(
      (response) => {
       console.log(response);
     
       this.onget();
       this.datosskill4[0]=datosskill3.idskills;
     }
   )}}
 
   location.href="webeditable#xsk1";
  }

  onClickmodifica (datosskill2: any){
    this.ventanaNuevoItem=true;
    this.titulo_skill=datosskill2.skill;
    this.porcentaje=datosskill2.porcentaje;
    this.ordeskill=datosskill2.orden_skill;
    this.idskill=datosskill2.idskills;
    
    this.form.controls['titulo_skill'].setValue(datosskill2.skill);
    this.form.controls['porcentaje'].setValue(datosskill2.porcentaje);
    this.idskillreferencia=1;

    location.href="webeditable#xsk";
    this.editask=1;
    
  }

  limpiaformulario(){
    this.form.controls['titulo_skill'].setValue("");
    this.form.controls['porcentaje'].setValue(0);
    this.titulo_skill="Ingrese Titulo del Skill";
    this.porcentaje="Ingrese Porcentaje del Skill";

  }

  onClickagrega (){
    this.limpiaformulario();
    this.ventanaNuevoItem=true;
   
    this.idskillreferencia=0;
    this.idskill=0;
    
    location.href="webeditable#xsk";
    
  }

  onClickdesestimar(){
    this.ventanaNuevoItem=false;
  }


  onClicksubmit (){
    
    console.log("xxxx");
    console.log(this.idskillreferencia);
    if (this.idskillreferencia==1) {this.orden1=this.ordeskill} else {this.orden1=this.datosskill2.length}
    this.datosproyectosamodificar[0]={idskills:this.idskill,
                                      skill:this.form.value.titulo_skill,
                                      porcentaje:this.form.value.porcentaje,
                                      orden_skill:this.orden1,
                                      usuariosk:{
                                        "idusuario": 1,
                                        "nombre": "Pedro"
                                    }
                                    };
    if (this.editask==0) {
    this.serviciosskill.postskill(this.datosproyectosamodificar[0])
     .subscribe(
       (response) => {
       console.log(response);
        
        this.onget();
      }
    );}
    else {
      console.log(this.datosproyectosamodificar[0].idskills);
      console.log(this.datosproyectosamodificar[0]);
      this.serviciosskill.putskill(this.datosproyectosamodificar[0].idskills,this.datosproyectosamodificar[0])
       .subscribe(
         (response) => {
         console.log(response);
          
          this.onget();
        }
      );}
    this.editask=0;
    this.limpiaformulario();
    this.ventanaNuevoItem=false;
    location.href="webeditable#xsk1";
    
  
    
     }


  drop(event: CdkDragDrop<any[]>) {
    
   
   moveItemInArray(this.datosskill2, event.previousIndex, event.currentIndex);
    
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    this.x=0;
    for (let cambiodeindex of this.datosskill2) {
    this.datosskill2[this.x].orden_skill=this.x;
    this.serviciosskill.postskill(this.datosskill2[this.x])
    .subscribe(
      (response) => {
       console.log(response);
       this.serviciosskill.getskill();
     });
     this.x=this.x+1};     
     
  }
           
    }
  


