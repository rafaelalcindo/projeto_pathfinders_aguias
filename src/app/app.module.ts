import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { routing  } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Testes01Module } from './testes01/testes01.module';
import { FooterComponent } from './footer/footer.component';
import { SistemaComponent } from './sistema/sistema.component';
import { LoginComponent } from './sistema/login/login.component';


import {DesbravadorService} from './sistema/sis_usuario.service';
import { ConquistaService } from './sistema/conquistas/conquistas.service';

import { AutenticacaoGuard } from './sistema/auth_guard/auth_guard.service';
import { Autenticacao } from './sistema/auth_guard/autenticacao.service';
import { PainelComponent } from './sistema/painel/painel.component';
import { ConquistasComponent } from './sistema/conquistas/conquistas.component';
import { ClassesComponent } from './sistema/conquistas/classes/classes.component';
import { EspecialidadesComponent } from './sistema/conquistas/especialidades/especialidades.component';
//import { Autenticacao } from './sistema/auth_guard/autenticacao.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    NavbarComponent,
    FooterComponent,
    SistemaComponent,
    LoginComponent,
    PainelComponent,
    ConquistasComponent,
    ClassesComponent,
    EspecialidadesComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    Testes01Module,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DesbravadorService, ConquistaService, AutenticacaoGuard, Autenticacao],
  bootstrap: [AppComponent]
})
export class AppModule { }
