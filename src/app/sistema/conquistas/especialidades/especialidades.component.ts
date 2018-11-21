import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConquistaService } from './../conquistas.service';

import {EspecialidadeImagem} from './EspecialidadeImagem/especialidadeImage';
import {EspecialidadeNatureza} from './EspecialidadeImagem/esepecialidadeImage-mock';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  public especialidadeNatureza: EspecialidadeImagem[] = EspecialidadeNatureza;

  public especialidadeDesbravador: any[];

  public temADRA: any[] = [];
  public temEstudosNatureza: any[] = [];
  public temAtividadesRecreativa: any[] = [];
  public temAtividadesProfissionais: any[] = [];
  public temCienciaESaude: any[] = [];
  public temAtividadesMissionarias: any[] = [];
  public temHabilidadesManuais: any[] = [];
  public temHabilidadesDomesticas: any[] = [];
  public temMestrado: any[] = [];

  public fillEstudosNatureza: EspecialidadeImagem[] = [];

  constructor(
    private conquistaServices: ConquistaService,
    private route: Router
  ) { }

  ngOnInit() {
    if ( localStorage.getItem('token_id') != null ) {
      const id_desbravador = localStorage.getItem('token_id');
      this.conquistaServices.getEspecialidadesDesbravador(id_desbravador)
        .subscribe((resposta: any) => {
          this.especialidadeDesbravador = resposta;
          this.verificarEspecialidades(this.especialidadeDesbravador);
          this.exibirEspecialidades();
          console.log('fill natureza: ', this.fillEstudosNatureza);
        } );
    } else {
      this.route.navigate(['/']);
    }
  }


  public verificarEspecialidades(especialidades: any): void {
    especialidades.map(especialidade => {
      this.AdicionarEspecialidadeCategoria(especialidade);
    });
  }

  public AdicionarEspecialidadeCategoria(especialidade): void {
    if (especialidade.area === 'Estudos da Natureza' ) {
      this.temEstudosNatureza.push(especialidade);
    } else if (especialidade.area === 'ADRA') {
      this.temADRA.push(especialidade);
    } else if ( especialidade.area === 'Atividades Recreativa') {
      this.temAtividadesRecreativa.push(especialidade);
    } else if ( especialidade.area === 'Atividades Recreativa' ) {
      this.temAtividadesMissionarias.push(especialidade);
    } else if ( especialidade.area === 'Atividades Profissionais' ) {
      this.temAtividadesProfissionais.push(especialidade);
    } else if ( especialidade.area === 'Ciência e Saúde' ) {
      this.temCienciaESaude.push(especialidade);
    } else if ( especialidade.area === 'Habilidades Manuais' ) {
      this.temHabilidadesManuais.push(especialidade);
    } else if ( especialidade.area === 'Habilidades Domésticas' ) {
      this.temHabilidadesDomesticas.push(especialidade);
    } else if ( especialidade.area === 'Mestrados' ) {
      this.temMestrado.push(especialidade);
    }
  }

  public exibirEspecialidades(): void {


    if ( this.temEstudosNatureza.length > 0 ) {
      this.temEstudosNatureza.map(estudos => {

         this.especialidadeNatureza.map(especi => {
          //console.log('nome especi: ', especi.nomeEspecialidade);
          //console.log('estudos natureza: ', estudos.especialidade);
            if ( especi.nomeEspecialidade === estudos.especialidade.toString()) {
              this.fillEstudosNatureza.push(especi);
            }
        });

      });
    } // Fim do filtro estudos da Natureza.


  }



}
