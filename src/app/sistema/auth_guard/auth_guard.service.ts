import { CanActivate } from '@angular/router';
import { Autenticacao } from './autenticacao.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private autenticacao: Autenticacao) {}

  canActivate(){
   // return this.autenticacao.autenticadoDesbravador();
   return this.autenticacao.autenticadoDesbravador();
  }

}
