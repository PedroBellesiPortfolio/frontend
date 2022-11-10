import { Component, OnInit } from '@angular/core';
import {bannerinterface} from "../../../bannerinterface"
import {personainterface} from "../../../personainterface"
import { BannerserviceService } from '../../../service/bannerservice.service';
import { PersonaserviceService } from '../../../service/personaservice.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-encabfotoedit',
  templateUrl: './encabfotoedit.component.html',
  styleUrls: ['./encabfotoedit.component.css']
})
export class EncabfotoeditComponent implements OnInit {
  datosbanner: bannerinterface [] = [];
  datospersona: personainterface [] = [];
  datosbanner2: bannerinterface [] = [];
  datospersona2: personainterface [] = [];
  formfoto: any;
  formbanner: any;
  formpersona: any;
  ventanaFoto:boolean=false;
  ventanaBanner:boolean=false;
  ventanaPersona:boolean=false;

  foto_entidad:string="Ingrese el Link a su foto personal";
  foto_fondo:string="Ingrese el link a la imagen del banner";
  nombre:string="Ingrese su Nombre";
  apellido:string="Ingrese su Apellido";
  provincia:string="Ingrese su Provincia";
  ciudad:string="Ingrese su Ciudad";
  pais:string="Ingrese su Pais";
  email:string="Ingrese su Email";
  telefono:string="Ingrese su Teléfono";
  experiencia_resumen:string="Ingrese su resumen de experiencia profesional";

  constructor(
    private serviciobanner : BannerserviceService,
    private serviciopersona : PersonaserviceService,
    private f_builderfoto : FormBuilder,
    private f_builderbanner : FormBuilder,
    private f_builderpersona : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formfoto = this.f_builderfoto.group({
      foto_entidad:['']      
    }); 
    this.formbanner = this.f_builderbanner.group({
      foto_fondo:['']      
    }); 

    this.formpersona = this.f_builderpersona.group({
      nombre:[''],
      apellido:[''],
      ciudad:[''],
      provincia:[''],
      pais:[''],
      telefono:['',[
        Validators.pattern("[0-9]+")
      ]],
      email:['',[
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]],
      experiencia_resumen:['']

    }); 

    this.serviciobanner.getbanner().subscribe((response: bannerinterface []) => {this.datosbanner = response;
    });
 this.serviciopersona.getpersona().subscribe((response: personainterface []) => {this.datospersona = response;
    });
  }

  onClickmodificafoto(){
    this.ventanaBanner=false;
    this.ventanaPersona=false;
    this.ventanaFoto=true;
    this.formfoto.controls['foto_entidad'].setValue(this.datosbanner[0].foto_entidad);
  }

  onClickmodificafotoenviar(){
    this.datosbanner2[0]={idbanner:this.datosbanner[0].idbanner,
                         foto_fondo:this.datosbanner[0].foto_fondo,
                         foto_entidad:this.formfoto.value.foto_entidad,
                         experiencia_resumen:this.datosbanner[0].experiencia_resumen,
                         usuarioba:{
                          "idusuario": 1,
                         "nombre": "Pedro"
                         }
                         };
  this.onClicksubmitbanner(this.datosbanner2[0]);
  this.ventanaFoto=false;
  window.location.reload();
  }

  onClickmodificabanner(){
    this.ventanaBanner=true;
    this.ventanaPersona=false;
    this.ventanaFoto=false;
    this.formbanner.controls['foto_fondo'].setValue(this.datosbanner[0].foto_fondo);
  }

  onClickmodificabannerenviar(){
    this.datosbanner2[0]={idbanner:this.datosbanner[0].idbanner,
                         foto_fondo:this.formbanner.value.foto_fondo,
                         foto_entidad:this.datosbanner[0].foto_entidad,
                         experiencia_resumen:this.datosbanner[0].experiencia_resumen,
                         usuarioba:{
                         "idusuario": 1,
                         "nombre": "Pedro"
                         }
                         };
  this.onClicksubmitbanner(this.datosbanner2[0]);
  this.ventanaBanner=false;
  window.location.reload();
  }

  onClickmodificapersona(){
    this.ventanaPersona=true;
    this.ventanaFoto=false;
    this.ventanaBanner=false;
    this.formpersona.controls['nombre'].setValue(this.datospersona[0].nombre);
    this.formpersona.controls['apellido'].setValue(this.datospersona[0].apellido);
    this.formpersona.controls['ciudad'].setValue(this.datospersona[0].ciudad);
    this.formpersona.controls['provincia'].setValue(this.datospersona[0].provincia);
    this.formpersona.controls['pais'].setValue(this.datospersona[0].pais);
    this.formpersona.controls['telefono'].setValue(this.datospersona[0].telefono);
    this.formpersona.controls['email'].setValue(this.datospersona[0].email);
    this.formpersona.controls['experiencia_resumen'].setValue(this.datosbanner[0].experiencia_resumen);
  }

  onClickmodificapersonaenviar(){
    this.datosbanner2[0]={idbanner:this.datosbanner[0].idbanner,
                         foto_fondo:this.datosbanner[0].foto_fondo,
                         foto_entidad:this.datosbanner[0].foto_entidad,
                         experiencia_resumen:this.formpersona.value.experiencia_resumen,
                         usuarioba:{
                         "idusuario": 1,
                         "nombre": "Pedro"
                         }
                         };

    this.datospersona2[0]={idpersona:this.datospersona[0].idpersona,
                          nombre:this.formpersona.value.nombre,
                          apellido:this.formpersona.value.apellido,
                          fecha_nacimiento:this.datospersona[0].fecha_nacimiento,
                          ciudad:this.formpersona.value.ciudad,
                          provincia:this.formpersona.value.provincia,
                          pais:this.formpersona.value.pais,
                          telefono:this.formpersona.value.telefono,
                          email:this.formpersona.value.email,
                          usuarioclave:this.datospersona[0].usuarioclave,
                          clave:this.datospersona[0].clave,
                          usuariope:{
                          "idusuario": 1,
                          "nombre": "Pedro"
                          }
                          };

console.log(this.datospersona2[0]);   
this.onClicksubmitpersona(this.datospersona2[0]);
this.onClicksubmitbanner(this.datosbanner2[0]);
this.ventanaPersona=false;

  }

  onClickdesestimar(){
    this.ventanaFoto=false;
    this.ventanaBanner=false;
    this.ventanaPersona=false;
  }

  onClicksubmitpersona (datosmodificar:any){
    this.serviciopersona.putpersona(datosmodificar)
    .subscribe(
      (response) => {
      console.log(response);
       
      this.serviciopersona.getpersona().subscribe((response: personainterface []) => {this.datospersona = response;
      });
     }
   )
  }

  onClicksubmitbanner (datosmodificar2:any){
    this.serviciobanner.putbanner(datosmodificar2)
    .subscribe(
      (response) => {
      console.log(response);
       
      this.serviciobanner.getbanner().subscribe((response: bannerinterface []) => {this.datosbanner = response;
      });
     }
   )


  }


}
