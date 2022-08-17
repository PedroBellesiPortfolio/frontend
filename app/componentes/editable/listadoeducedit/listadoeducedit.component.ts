import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import {educacioninterface} from "../../../educacioninterface"
import { InformacionService } from '../../../service/informacion.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop' ;
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common' 

@Component({
  selector: 'app-listadoeducedit',
  templateUrl: './listadoeducedit.component.html',
  styleUrls: ['./listadoeducedit.component.css']
})
export class ListadoeduceditComponent implements OnInit {
  datoseducacion: educacioninterface[] = [];
  datoseducacion2: educacioninterface[] = [];
  datoseducacion3: educacioninterface[] = [];
  datoseducacion4: educacioninterface[] = [];
  datoseducacionamodificar: educacioninterface[] = [];
  ventanaNuevoItem:boolean=false;

  institucion: string ="Ingrese Nombre de la Institucion";
  titulo: string ="Ingrese nombre del Titulo";
  logo_institucion: string ="Ingrese el Link del Logo de la Institucion";
  completado: number =0;
  fecha_finalizacion_titulo:any=[''];

  orden_titulo: number =0;
  ideducacion: any=0;
  idreferencia:number=1;
  form: any;
  orden1: number=0;
  x: any;
  completado1: number=0;
  
 
  
   

  constructor(
    private servicioInformacion : InformacionService,
    private f_builder : FormBuilder
  ) { }

 

  

  ngOnInit(): void {

    this.form = this.f_builder.group({
      institucion:[''],
      titulo: [''],
      logo_institucion: [''],
      completado:[0],
      fecha_finalizacion_titulo: ['']  
    }); 

   this.onget();
   
  
  }

  onget(){
    this.servicioInformacion.geteducacion().subscribe((response: educacioninterface []) => {this.datoseducacion = response;
    });
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(this.datoseducacion2)
        this.datoseducacion2=this.datoseducacion;
        
        this.datoseducacion2.sort((a, b ) => {
              return a.orden_titulo - b.orden_titulo;
          }); 
      }, 1500);
      
    });

  }
 
  onClickDelete (datoseducacion3: any){
    
    if (confirm("seguro que desea eliminar?")){
    if  (datoseducacion3.ideducacion==this.datoseducacion4[0]) {} else {
    this.servicioInformacion.deleteeducacion(datoseducacion3.ideducacion)
     .subscribe(
       (response) => {
        console.log(response);
        //this.servicioInformacion.geteducacion();
        this.onget();
        this.datoseducacion4[0]=datoseducacion3.ideducacion;
      }
    );}}
   
   }
 
   onClickmodifica (datoseducacion2: any){
     this.ventanaNuevoItem=true;
     this.institucion=datoseducacion2.institucion;
     this.titulo=datoseducacion2.titulo;
     this.logo_institucion=datoseducacion2.logo_institucion;
     this.completado=datoseducacion2.completado;
     this.fecha_finalizacion_titulo=datoseducacion2.fecha_finalizacion_titulo;
     this.orden_titulo=datoseducacion2.orden_titulo;
     this.ideducacion=datoseducacion2.ideducacion;
     
     this.form.controls['institucion'].setValue(datoseducacion2.institucion);
     this.form.controls['titulo'].setValue(datoseducacion2.titulo);
     this.form.controls['logo_institucion'].setValue(datoseducacion2.logo_institucion);
     this.form.controls['completado'].setValue(datoseducacion2.completado);
     this.form.controls['fecha_finalizacion_titulo'].setValue(formatDate(datoseducacion2.fecha_finalizacion_titulo,'yyyy-MM-dd','en'));
     this.idreferencia=1;
 
     location.href="webeditable#xxx";
     
   }

   limpiaformulario(){
    this.form.controls['institucion'].setValue("");
    this.form.controls['titulo'].setValue("");
    this.form.controls['logo_institucion'].setValue("");
    this.form.controls['completado'].setValue(0);
    this.form.controls['fecha_finalizacion_titulo'].setValue(formatDate(0,'yyyy-MM-dd','en'));
    this.institucion = "Ingrese Nombre de la Institucion";
    this.titulo ="Ingrese nombre del Titulo";
    this.logo_institucion="Ingrese el Link del Logo de la Institucion";
    this.completado=0;
    this.fecha_finalizacion_titulo="Fecha Titulo";
   }
 
   onClickagrega (){
    this.limpiaformulario();
     this.ventanaNuevoItem=true;

     

     this.idreferencia=0;
     this.ideducacion=0;
     
     location.href="webeditable#xxx";
     
   }
 
   onClickdesestimar(){
     this.ventanaNuevoItem=false;
     this.limpiaformulario()
   }
 
 
   onClicksubmit (){
     
     console.log("xxxx");
     console.log(this.idreferencia);
     if (this.form.value.completado==true){this.completado1=1}
     if (this.form.value.completado==false){this.completado1=0}
     if (this.idreferencia==1) {this.orden1=this.orden_titulo} else {this.orden1=this.datoseducacion2.length}
     this.datoseducacionamodificar[0]={ideducacion:this.ideducacion,
                                       institucion:this.form.value.institucion,
                                       titulo:this.form.value.titulo,
                                       logo_institucion:this.form.value.logo_institucion,
                                       completado:this.completado1,
                                       fecha_finalizacion_titulo:this.form.value.fecha_finalizacion_titulo,
                                       orden_titulo:this.orden1,
                                       usuarioed:{
                                         "idusuario": 1,
                                         "nombre": "Pedro"
                                     }
                                     };
     this.servicioInformacion.posteducacion(this.datoseducacionamodificar[0])
      .subscribe(
        (response) => {
        console.log(response);
         //this.servicioInformacion.geteducacion();
         this.onget();
       }
     )
     this.limpiaformulario()
     this.ventanaNuevoItem=false;
     location.href="webeditable#xed1";
     
   
    
    }
 
 
   drop(event: CdkDragDrop<any[]>) {
     
    
    moveItemInArray(this.datoseducacion2, event.previousIndex, event.currentIndex);
     
     console.log(event.previousIndex);
     console.log(event.currentIndex);
     this.x=0;
     for (let cambiodeindex of this.datoseducacion2) {
     this.datoseducacion2[this.x].orden_titulo=this.x;
     this.servicioInformacion.posteducacion(this.datoseducacion2[this.x])
     .subscribe(
       (response) => {
        console.log(response);
        this.servicioInformacion.geteducacion();
      });
      this.x=this.x+1};     
      
   }


}