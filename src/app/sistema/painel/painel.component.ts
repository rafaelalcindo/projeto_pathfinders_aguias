import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {DesbravadorService} from '../sis_usuario.service';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, AfterViewInit, OnDestroy {

  private token_id: string;
  public desbravador: any[];

  constructor(
    private desbravadorService: DesbravadorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token_id =  localStorage.getItem('token_id');
    this.desbravadorService.informacaoPainel(this.token_id)
      .subscribe((resposta: any) => {
          this.desbravador = resposta;
          console.log('painel resultado: ', resposta);

      })
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('fundoPainel');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('fundoPainel');
  }

  public conquistas(): void {
    this.router.navigate(['/conquistaPessoal']);
  }
}
