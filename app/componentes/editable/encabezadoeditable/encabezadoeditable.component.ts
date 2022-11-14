import { Component, OnInit } from '@angular/core';
import {redsocialinterface} from "../../../redsocialinterface"
import { RedesserviceService } from '../../../service/redesservice.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezadoeditable',
  templateUrl: './encabezadoeditable.component.html',
  styleUrls: ['./encabezadoeditable.component.css']
})
export class EncabezadoeditableComponent implements OnInit {
  datosredes: redsocialinterface [] = [];
  form: any;
  ventanaNuevoItem:boolean=false;
  red:any[]=[];
  redcontrol:any;

  constructor(private servicioredsocial : RedesserviceService,
    private f_builder : FormBuilder,
    private authService: AuthService, private router: Router
    ) { }

  ngOnInit(): void {

    this.red[0]='facebook';
    this.red[1]='instagram';
    this.red[2]='linkedin';

    this.form = this.f_builder.group({
      facebook:[''],
      instagram: [''],
      linkedin: [''],
      }); 

    this.servicioredsocial.getred().subscribe((response: redsocialinterface []) => {this.datosredes = response; console.log(this.datosredes)
    });
  }

  funcionDeAcceso(){
    this.authService.logout();
    console.log("salir");
    this.router.navigate(['']);
  }

  onClickedita(){
    this.ventanaNuevoItem=true;
    this.form.controls['facebook'].setValue(this.datosredes[0].link_red);
    this.form.controls['instagram'].setValue(this.datosredes[1].link_red);
    this.form.controls['linkedin'].setValue(this.datosredes[2].link_red);
  }

  onClickmodifica(){
    for (let a:any=0;a<3;a++){
    if (this.form.controls[this.red[a]].value=="") {this.redcontrol=""} else {this.redcontrol=this.red[a]}
    this.datosredes[a]={idredes:this.datosredes[a].idredes,
                        red:this.redcontrol,
                        logo_red:this.datosredes[a].logo_red,
                        link_red:this.form.controls[this.red[a]].value,
                       usuariore:{
                      "idusuario": 1,
                      "nombre": "Pedro"
                       }
      };
      console.log(this.datosredes[a]);
      this.onClicksubmitred (this.datosredes[a])
    }
    this.ventanaNuevoItem=false;
  }

  onClickdesestimar(){
    this.ventanaNuevoItem=false;
  }

  onClicksubmitred (datosmodificar:any){
    this.servicioredsocial.postred(datosmodificar)
    .subscribe(
      (response) => {
      console.log(response);
       
      this.servicioredsocial.getred().subscribe((response: redsocialinterface []) => {this.datosredes = response;
      });
     }
   )
  }


}
