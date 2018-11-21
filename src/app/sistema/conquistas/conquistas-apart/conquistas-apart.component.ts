import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConquistaService } from './../conquistas.service';

@Component({
  selector: 'app-conquistas-apart',
  templateUrl: './conquistas-apart.component.html',
  styleUrls: ['./conquistas-apart.component.css']
})
export class ConquistasApartComponent implements OnInit {

  public conquistaDesbravador: any[];

  constructor(
    private conquistaService: ConquistaService,
    private route: Router
  ) { }

  ngOnInit() {
    if ( localStorage.getItem('token_id') != null ) {
      const id_desbravador = localStorage.getItem('token_id');
      this.conquistaService.getConquistasDesbravador(id_desbravador)
        .subscribe((resposta: any) => {
          this.conquistaDesbravador = resposta;
          console.log('conquista: ', this.conquistaDesbravador );
        });
    } else {
      this.route.navigate(['/']);
    }
  }

}
