import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Autenticacao {
    public token_id: string;

    constructor(private router: Router) { }

    public autenticarDesbravador(id: string): void {
        this.token_id = id;
        localStorage.setItem('token_id', id);
        //this.router.
    }

    public autenticadoDesbravador(): boolean {
        if(this.token_id === undefined && localStorage.getItem('token_id') != null){
            this.token_id = localStorage.getItem('token_id');
        }
                
        return this.token_id !== undefined;
    }

    public sair(): void {
        localStorage.removeItem('token_id');
        this.token_id = undefined;
        this.router.navigate(['/']);
    }


}