import { Router } from '@angular/router';
import { ConquistaService } from './../conquistas.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  public classesDesbravador: any[];
  public classeAmigo: boolean = false;
  public classeCompanheiro: boolean = false;
  public classePesquisador: boolean = false;
  public classePioneiro: boolean =  false;
  public classeExcurcionista: boolean = false;
  public classeGuia: boolean = false;

  public classeExcelencia: boolean = false;

  public possuiAvancada: boolean = false;
  public classeAmigoAvancada: boolean = false;
  public classeCompanheiroAvancada: boolean = false;
  public classePesquisadorAvancada: boolean = false;
  public classePioneiroAvancada: boolean =  false;
  public classeExcurcionistaAvancada: boolean = false;
  public classeGuiaAvancada: boolean = false;

  public classeLider: boolean = false;
  public classeLiderMaster: boolean = false;
  public classeLiderMasterAvancado: boolean = false;

  public possuiMedalha: boolean = false;
  public medalhaBronze: boolean = false;
  public medalhaPrata:  boolean = false;
  public medalhaOuro:   boolean = false;

  // imagem in property bind
  public classeVazia: string = "/assets/painel_images/classes/vazio.png";

  constructor(
    private conquistaService: ConquistaService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token_id') != null){
      let id_desbravador = localStorage.getItem('token_id');
      this.conquistaService.getClassesDesbravador(id_desbravador)
        .subscribe((resposta: any) => {
          this.classesDesbravador = resposta;
          this.verificarClasse(this.classesDesbravador);
          console.log('Classes', this.classesDesbravador);
        } )
    } else {
      this.router.navigate(['/']);
    }
  }

  public verificarClasse(classeDesbravador: any): void {
    classeDesbravador.forEach(desbravador => {
      // Classes Normais
      if(desbravador.classe === 'Amigo')
          this.classeAmigo = true;
      if(desbravador.classe === 'Companheiro')
          this.classeCompanheiro = true;
      if(desbravador.classe === 'Pesquisador')
        this.classePesquisador = true;
      if(desbravador.classe === 'Pioneiro')
        this.classePioneiro = true;
      if(desbravador.classe === 'Excurcionista')
        this.classeExcurcionista = true;
      if(desbravador.classe === 'Guia')
        this.classeGuia = true;

      // Excelencia
      if(desbravador.classe === 'Excelencia')
        this.classeExcelencia = true;

      // Avançada
      if(desbravador.classe === 'Amigo_avancado'){
          this.classeAmigoAvancada = true;
          this.possuiAvancada = true;
      }
      if(desbravador.classe === 'Companheiro_avancado'){
          this.classeCompanheiroAvancada = true;
          this.possuiAvancada = true;
      }
      if(desbravador.classe === 'Pesquisador_avancado'){
          this.classePesquisadorAvancada = true;
          this.possuiAvancada = true;
      }
      if(desbravador.classe === 'Pioneiro'){
          this.classePioneiroAvancada = true;
          this.possuiAvancada = true;
      }
      if(desbravador.classe === 'Excurcionista_avancado'){
          this.classeExcurcionistaAvancada = true;
          this.possuiAvancada = true;
      }
      if(desbravador.classe === 'Guia_avancado'){
          this.classeGuiaAvancada = true;
          this.possuiAvancada = true;
      }

      // Lider
      if(desbravador.classe === 'Lider')
          this.classeLider = true;
      if(desbravador.classe === 'Lider_master')
          this.classeLiderMaster = true;
      if(desbravador.classe === 'Lider_master_avancado')
          this.classeLiderMasterAvancado = true;

      // medalhas
      if(desbravador.classe === 'Medalha_bronze'){
        this.possuiMedalha = true;
        this.medalhaBronze = true;
      }
      if(desbravador.classe === 'Medalha_prata'){
        this.possuiMedalha = true;
        this.medalhaPrata  = true;
      }
      if(desbravador.classe === 'Medalha_ouro'){
        this.possuiMedalha = true;
        this.medalhaOuro   = true;
      }

    });
  } // Fim da Função

}
