import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;

  constructor(
    private f_builder : FormBuilder,
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.f_builder.group({
      
      email:['',[
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]],
      password:['']

    }); 


  }

  onClickenviar(){
    const { email, password } = this.form;
    this.authService.login(this.form.controls['email'].value,this.form.controls['password'].value).then(user => {
      console.log("Bienvenido ", user);
      if(!user) {
        alert("Datos incorrectos");
        return;
      };
      this.router.navigate(['/webeditable'])
    }).catch(err=>{
      console.log(err)
    })
  }

  onClickdesestimar(){
    this.router.navigate(['']);
  }

}
