import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EncabfotoComponent } from './componentes/encabfoto/encabfoto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BotoneditarComponent } from './componentes/botoneditar/botoneditar.component';
import { BotoneliminarComponent } from './componentes/botoneliminar/botoneliminar.component';
import { BotonagregarComponent } from './componentes/botonagregar/botonagregar.component';
import { FotoPerfilComponent } from './componentes/foto-perfil/foto-perfil.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BotonfacebookComponent } from './componentes/botonfacebook/botonfacebook.component';
import { BotoninstagramComponent } from './componentes/botoninstagram/botoninstagram.component';
import { BotonlinkedinComponent } from './componentes/botonlinkedin/botonlinkedin.component';
import { BotonaccesoComponent } from './componentes/botonacceso/botonacceso.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { FrontendComponent } from './componentes/frontend/frontend.component';
import { WebeditableComponent } from './componentes/webeditable/webeditable.component';
import { EncabfotoeditComponent } from './componentes/editable/encabfotoedit/encabfotoedit.component';
import { EducacioneditComponent } from './componentes/editable/educacionedit/educacionedit.component';
import { ExperienciaeditComponent } from './componentes/editable/experienciaedit/experienciaedit.component';
import { ProyectoseditComponent } from './componentes/editable/proyectosedit/proyectosedit.component';
import { SkillseditComponent } from './componentes/editable/skillsedit/skillsedit.component';
import { ListadoeduceditComponent } from './componentes/editable/listadoeducedit/listadoeducedit.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { EncabezadoeditableComponent } from './componentes/editable/encabezadoeditable/encabezadoeditable.component';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyDUv-x0m8e1wV1Wq6ZIV-pmBUP48HnL3f0",
  authDomain: "portfoliopedrobellesi.firebaseapp.com",
  projectId: "portfoliopedrobellesi",
  storageBucket: "portfoliopedrobellesi.appspot.com",
  messagingSenderId: "1082130501000",
  appId: "1:1082130501000:web:0fac08cf37726363737e3d"
};

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EncabfotoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    BotoneditarComponent,
    BotoneliminarComponent,
    BotonagregarComponent,
    FotoPerfilComponent,
    BannerComponent,
    BotonfacebookComponent,
    BotoninstagramComponent,
    BotonlinkedinComponent,
    BotonaccesoComponent,
    ListadoComponent,
    FrontendComponent,
    WebeditableComponent,
    EncabfotoeditComponent,
    EducacioneditComponent,
    ExperienciaeditComponent,
    ProyectoseditComponent,
    SkillseditComponent,
    ListadoeduceditComponent,
    EncabezadoeditableComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
