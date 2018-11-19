import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConquistaService } from './../conquistas.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  public especialidadeDesbravador: any[];

  public temADRA: any[];
  public temEstudosNatureza: any[];
  public temAtividadesRecreativa: any[];
  public temAtividadesProfissionais: any[];
  public temCienciaESaude: any[];
  public temAtividadesMissionarias: any[];
  public temHabilidadesManuais: any[];
  public temHabilidadesDomesticas: any[];
  public temMestrado: any[];

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
      this.temEstudosNatureza = especialidade;
    } else if (especialidade.area === 'ADRA') {
      this.temADRA = especialidade;
    } else if ( especialidade.area === 'Atividades Recreativa') {
      this.temAtividadesRecreativa = especialidade;
    } else if ( especialidade.area === 'Atividades Recreativa' ) {
      this.temAtividadesMissionarias = especialidade;
    } else if ( especialidade.area === 'Atividades Profissionais' ) {
      this.temAtividadesProfissionais = especialidade;
    } else if ( especialidade.area === 'Ciência e Saúde' ) {
      this.temCienciaESaude = especialidade;
    } else if ( especialidade.area === 'Habilidades Manuais' ) {
      this.temHabilidadesManuais = especialidade;
    } else if ( especialidade.area === 'Habilidades Domésticas' ) {
      this.temHabilidadesDomesticas = especialidade;
    } else if ( especialidade.area === 'Mestrados' ) {
      this.temMestrado = especialidade;
    }

    console.log('Especialidade estudos Natureza : ', this.temEstudosNatureza);
  }



}
