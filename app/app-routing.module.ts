import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './componentes/frontend/frontend.component';
import { WebeditableComponent } from './componentes/webeditable/webeditable.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {path:'', component:FrontendComponent},
  {path:'webeditable', component:WebeditableComponent, canActivate:[AngularFireAuthGuard]},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
