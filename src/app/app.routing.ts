import { ModuleWithProviders } from '@angular/core';
import { Testes01Component } from './testes01/testes01.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './sistema/login/login.component';
import { PainelComponent } from './sistema/painel/painel.component';
import { ConquistasComponent } from './sistema/conquistas/conquistas.component';
import { ClassesComponent } from './sistema/conquistas/classes/classes.component';
import { EspecialidadesComponent } from './sistema/conquistas/especialidades/especialidades.component';

import { AutenticacaoGuard } from './sistema/auth_guard/auth_guard.service';


const APP_ROUTES: Routes = [
    { path: 'testes', component: Testes01Component },
    { path: 'sobre', component: SobreComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    // dentro do sistema
    { path: 'painel', component: PainelComponent, canActivate: [AutenticacaoGuard] },
    { path: 'conquistaPessoal', component: ConquistasComponent, canActivate: [AutenticacaoGuard] },
    { path: 'conquistas/classes', component: ClassesComponent, canActivate: [AutenticacaoGuard] },
    { path: 'conquistas/especialidades', component: EspecialidadesComponent, canActivate: [AutenticacaoGuard] }

];

export const routing: ModuleWithProviders =  RouterModule.forRoot(APP_ROUTES);
