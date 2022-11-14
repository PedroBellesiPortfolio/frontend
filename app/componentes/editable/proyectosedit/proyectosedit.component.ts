import { Component, OnInit } from '@angular/core';
import {proyectosinterface} from "../../../proyectosinterface"
import {ProyectosService } from '../../../service/proyectosservice.service';
import { Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop' ;
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-proyectosedit',
  templateUrl: './proyectosedit.component.html',
  styleUrls: ['./proyectosedit.component.css']
})
export class ProyectoseditComponent implements OnInit {
  datosproyectos: proyectosinterface [] = [];
  datosproyectos2: proyectosinterface [] = [];
  datosproyectos3: proyectosinterface [] = [];
  datosproyectos4: proyectosinterface [] = [];
  datosaborrar: proyectosinterface [] = [];
  datosproyectosamodificar: proyectosinterface [] = [];
  x:number=0;
  ventanaNuevoItem:boolean=false;
  orden1: number=0;
  ordeproyecto: number=0;
  idproyectoreferencia:number=1;
  idproyecto:number=0;
  form: any;
  titulo:string="Titulo del Proyecto";
  linkproyecto:string="Link del Proyecto";
  fotoproyecto:string="Foto del Proyecto";
  descripcionproyecto:string="Descripcion del Proyecto";
  anoproyecto:any="Año Finalizacion del Proyecto";
  editapro: any; 
  
  
  

  constructor(
    private serviciosproyectos : ProyectosService,
    private f_builder : FormBuilder
  ) {}

  
  
  ngOnInit(): void {
    
this.editapro= 0;
    this.form = this.f_builder.group({
      titulo_proyecto:[''],
      link_proyecto: [''],
      foto_proyecto: [''],
      descripcion_proyecto:[''],
      year_proyecto: ['',[
        Validators.pattern("[0-9]+")
      ]]  
    }); 
    this.onget();
    
      
  }

  onget(){
    this.serviciosproyectos.getproyectos().subscribe((response: proyectosinterface []) => {this.datosproyectos = response;
    });
    var promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log(this.datosproyectos2)
       this.datosproyectos2=this.datosproyectos;
       
       this.datosproyectos2.sort((a, b) => {
             return a.orden_proyectos - b.orden_proyectos;
         }); 
     }, 1000);
     
   });
  }




  onClickDelete (datosproyectos3: any){
   
   if (confirm("seguro que desea eliminar?")){
   if  (datosproyectos3.idproyectos==this.datosproyectos4[0]) {} else {
   this.serviciosproyectos.deleteproyetos(datosproyectos3.idproyectos)
    .subscribe(
      (response) => {
       console.log(response);
       //this.serviciosproyectos.getproyectos();
       this.onget();
       this.datosproyectos4[0]=datosproyectos3.idproyectos;
     }
   )}}
    
      
  }

  onClickmodifica (datosproyectos2: any){
    this.ventanaNuevoItem=true;
    this.titulo=datosproyectos2.titulo_proyecto;
    this.linkproyecto=datosproyectos2.link_proyecto;
    this.fotoproyecto=datosproyectos2.foto_proyecto;
    this.descripcionproyecto=datosproyectos2.descripcion_proyecto;
    this.anoproyecto=datosproyectos2.year_proyecto;
    this.ordeproyecto=datosproyectos2.orden_proyecto;
    this.idproyecto=datosproyectos2.idproyectos;
    
    this.form.controls['titulo_proyecto'].setValue(datosproyectos2.titulo_proyecto);
    this.form.controls['link_proyecto'].setValue(datosproyectos2.link_proyecto);
    this.form.controls['foto_proyecto'].setValue(datosproyectos2.foto_proyecto);
    this.form.controls['descripcion_proyecto'].setValue(datosproyectos2.descripcion_proyecto);
    this.form.controls['year_proyecto'].setValue(datosproyectos2.year_proyecto);
    this.idproyectoreferencia=1;

    location.href="webeditable#xpr";
    this.editapro= 1;
    
  }

  limpiaformulario(){
    this.form.controls['titulo_proyecto'].setValue("");
    this.form.controls['link_proyecto'].setValue("");
    this.form.controls['foto_proyecto'].setValue("");
    this.form.controls['descripcion_proyecto'].setValue("");
    this.form.controls['year_proyecto'].setValue("");
    this.titulo="Ingrese Titulo del Proyecto";
    this.linkproyecto="Ingrese Link del Proyecto";
    this.fotoproyecto="Ingrese Link Foto del Proyecto";
    this.descripcionproyecto="Ingrese Descripcion del Proyecto";
    this.anoproyecto="Ingrese Año de Finalizacion del Proyecto";
  }

  onClickagrega (){
    this.limpiaformulario();
    this.ventanaNuevoItem=true;
    
    this.idproyectoreferencia=0;
    this.idproyecto=0;
    
    location.href="webeditable#xpr";
    
  }

  onClickdesestimar(){
    this.ventanaNuevoItem=false;
  }


  onClicksubmit (){
    
    console.log("xxxx");
    console.log(this.idproyectoreferencia);
    if (this.idproyectoreferencia==1) {this.orden1=this.ordeproyecto} else {this.orden1=this.datosproyectos2.length}
    this.datosproyectosamodificar[0]={idproyectos:this.idproyecto,
                                      titulo_proyecto:this.form.value.titulo_proyecto,
                                      link_proyecto:this.form.value.link_proyecto,
                                      foto_proyecto:this.form.value.foto_proyecto,
                                      descripcion_proyecto:this.form.value.descripcion_proyecto,
                                      tecnologias:"",
                                      year_proyecto:this.form.value.year_proyecto,
                                      orden_proyectos:this.orden1,
                                      usuariopr:{
                                        "idusuario": 1,
                                        "nombre": "Pedro"
                                    }
                                    };
    if (this.editapro==0) {
    this.serviciosproyectos.postproyetos(this.datosproyectosamodificar[0])
     .subscribe(
       (response) => {
       console.log(response);
        //this.serviciosproyectos.getproyectos();
        this.onget();
      }
    );}
    else { this.serviciosproyectos.putproyetos(this.datosproyectosamodificar[0].idproyectos,this.datosproyectosamodificar[0])
    .subscribe(
      (response) => {
      console.log(response);
       
       this.onget();
     }
   );};
   this.editapro= 0;    
    this.limpiaformulario();
    this.ventanaNuevoItem=false;
    location.href="webeditable#xpr1";
    

   
   }


  drop(event: CdkDragDrop<any[]>) {
    
   
   moveItemInArray(this.datosproyectos2, event.previousIndex, event.currentIndex);
    
    console.log(event.previousIndex);
    console.log(event.currentIndex);
    this.x=0;
    for (let cambiodeindex of this.datosproyectos2) {
    this.datosproyectos2[this.x].orden_proyectos=this.x;
    this.serviciosproyectos.postproyetos(this.datosproyectos2[this.x])
    .subscribe(
      (response) => {
       console.log(response);
       this.serviciosproyectos.getproyectos();
     });
     this.x=this.x+1};     
     
  }
  
  
  }
