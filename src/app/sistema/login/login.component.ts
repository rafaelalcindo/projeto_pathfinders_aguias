import { Component, OnInit, ViewChild} from '@angular/core';
import { trigger, state, style, transition, animate  } from '@angular/animations';
import { NgForm } from '@angular/forms';
import {DesbravadorService} from '../sis_usuario.service';
import {Autenticacao} from '../auth_guard/autenticacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('logintela',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(0, -50px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])

  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm;
  public estadoLoginTela: string = 'criado';

  constructor(private loginDesbrava: DesbravadorService,
              private autenticacao: Autenticacao,
              private router: Router) { }

  ngOnInit() {
  }

  public logarUsuario(): void {
    console.log(this.formulario);
    this.loginDesbrava.logarUsuario(this.formulario.value.login, this.formulario.value.senha)
      .subscribe((resposta: any) => {
        console.log('resposta: ', resposta);
         if ( resposta[0].id !== undefined) {
            this.autenticacao.autenticarDesbravador(resposta[0].id);
            this.router.navigate(['/']);
         }
      });
  }

}
