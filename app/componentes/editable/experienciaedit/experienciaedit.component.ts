import { Component, OnInit } from '@angular/core';
import {experienciainterface} from "../../../experienciainterface"
import {ExperienciaserviceService } from '../../../service/experienciaservice.service';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop' ;
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-experienciaedit',
  templateUrl: './experienciaedit.component.html',
  styleUrls: ['./experienciaedit.component.css']
})
export class ExperienciaeditComponent implements OnInit {
  datosexperiencia: experienciainterface [] = [];
  datosexperiencia2: experienciainterface [] = [];
  datosexperiencia3: experienciainterface [] = [];
  datosexperiencia4: experienciainterface [] = [];
  datosaborrar: experienciainterface [] = [];
  datosexperienciaamodificar: experienciainterface [] = [];
  x:number=0;
  ventanaNuevoItem:boolean=false;
  orden1: number=0;
  ordeexperiencia: number=0;
  idexperienciareferencia:number=1;
  idexperiencia:number=0;
  form: any;
  edita: any;

  titulo_puesto:string="Ingrese Titulo del Puesto";
  empresa:string="Ingrese Nombre de la empresa";
  logo_empresa:string="";
  descripcion_tareas:string="Ingrese Descripcion de Tareas";
  year_inicio:any="Ingrese año inicio en el puesto";
  year_cierre:any="Ingrese último año en el puesto (actual si continúa)";

  constructor(
    private servicioExperiencia : ExperienciaserviceService,
    private f_builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.edita = 0;


    this.form = this.f_builder.group({
      titulo_puesto:[''],
      empresa: [''],
      logo_empresa: [''],
      descripcion_tareas:[''],
      year_inicio: ['',[
        Validators.pattern("[0-9]+")
      ]],
      year_cierre: ['',[
        Validators.pattern("[0-9]+")
      ]]
    }); 
  this.onget();
    
      
  }

  onget(){
    this.servicioExperiencia.getexperiencia().subscribe((response: experienciainterface []) => {this.datosexperiencia = response;
    });
    var promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log(this.datosexperiencia2)
       this.datosexperiencia2=this.datosexperiencia;
       
       this.datosexperiencia2.sort((a, b) => {
             return a.orden_experiencia - b.orden_experiencia;
         }); 
     }, 1000);
     
   });

  }


  onClickDelete (datosexperiencia3: any){
   if (confirm("seguro que desea eliminar?")){
   if  (datosexperiencia3.idexperiencia==this.datosexperiencia4[0]) {} else {
   this.servicioExperiencia.deleteexperiencia(datosexperiencia3.idexperiencia)
    .subscribe(
      (response) => {
       console.log(response);
       //this.servicioExperiencia.getexperiencia();
       this.onget();
       this.datosexperiencia4[0]=datosexperiencia3.idexperiencia;
     }
   )}}
   
  }

  onClickmodifica (datosexperiencia2: any){
    this.ventanaNuevoItem=true;
    this.titulo_puesto=datosexperiencia2.titulo_puesto;
    this.empresa=datosexperiencia2.empresa;
    this.logo_empresa=datosexperiencia2.logo_empresa;
    this.descripcion_tareas=datosexperiencia2.descripcion_tareas;
    this.year_inicio=datosexperiencia2.year_inicio;
    this.year_cierre=datosexperiencia2.year_cierre;
    this.ordeexperiencia=datosexperiencia2.orden_experiencia;
    this.idexperiencia=datosexperiencia2.idexperiencia;
    
    this.form.controls['titulo_puesto'].setValue(datosexperiencia2.titulo_puesto);
    this.form.controls['empresa'].setValue(datosexperiencia2.empresa);
    this.form.controls['logo_empresa'].setValue(datosexperiencia2.logo_empresa);
    this.form.controls['descripcion_tareas'].setValue(datosexperiencia2.descripcion_tareas);
    this.form.controls['year_inicio'].setValue(datosexperiencia2.year_inicio);
    this.form.controls['year_cierre'].setValue(datosexperiencia2.year_cierre);

    this.idexperienciareferencia=1;

    location.href="webeditable#xyy";
    this.edita = 1;
    
  }

  limpiaformulario(){
    this.form.controls['titulo_puesto'].setValue("");
    this.form.controls['empresa'].setValue("");
    this.form.controls['logo_empresa'].setValue("");
    this.form.controls['descripcion_tareas'].setValue("");
    this.form.controls['year_inicio'].setValue("");
    this.form.controls['year_cierre'].setValue("");

    this.titulo_puesto="Ingrese Titulo del Puesto";
    this.empresa="Ingrese Nombre de la empresa";
    this.logo_empresa="Ingrese Link del logo de la empresa";
    this.descripcion_tareas="Ingrese Descripcion de Tareas";
    this.year_inicio="Ingrese Año inicio";
    this.year_cierre="Ingrese Año cierre";

  }
  
    onClickagrega (){
     this.limpiaformulario();
    this.ventanaNuevoItem=true;

  

    this.idexperienciareferencia=0;
    this.idexperiencia=0;
    
    location.href="webeditable#xyy";
    
  }

  onClickdesestimar(){
    this.ventanaNuevoItem=false;
  }


  onClicksubmit (){
    
    console.log("xxxx");
    console.log(this.idexperienciareferencia);
    if (this.idexperienciareferencia==1) {this.orden1=this.ordeexperiencia} else {this.orden1=this.datosexperiencia2.length}
    this.datosexperienciaamodificar[0]={idexperiencia:this.idexperiencia,
                                      titulo_puesto:this.form.value.titulo_puesto,
                                      empresa:this.form.value.empresa,
                                      logo_empresa:this.form.value.logo_empresa,
                                      descripcion_tareas:this.form.value.descripcion_tareas,
                                      year_inicio:this.form.value.year_inicio,
                                      year_cierre:this.form.value.year_cierre,
                                      orden_experiencia:this.orden1,
                                      usuarioex:{
                                        "idusuario": 1,
                                        "nombre": "Pedro"
                                    }
                                    };
   if (this.edita==0) {                                
    this.servicioExperiencia.postexperiencia(this.datosexperienciaamodificar[0])
     .subscribe(
       (response) => {
       console.log(response);
        //this.servicioExperiencia.getexperiencia();
        this.onget();
      }
    );} 
    else {
      this.servicioExperiencia.putexperiencia(this.datosexperienciaamodificar[0])
      .subscribe(
        (response) => {
        console.log(response);
        
         this.onget();
       }
     );
    };
    this.edita = 0;
    this.limpiaformulario();
    this.ventanaNuevoItem=false;
    location.href="webeditable#xex1";
    
   
   }


  drop(event: CdkDragDrop<any[]>) {
    
   
   moveItemInArray(this.datosexperiencia2, event.previousIndex, event.currentIndex);
    
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    this.x=0;
    for (let cambiodeindex of this.datosexperiencia2) {
    this.datosexperiencia2[this.x].orden_experiencia=this.x;
    this.servicioExperiencia.putexperiencia(this.datosexperiencia2[this.x])
    .subscribe(
      (response) => {
       console.log(response);
       this.servicioExperiencia.getexperiencia();
     });
     this.x=this.x+1};     
     
  }

  }


