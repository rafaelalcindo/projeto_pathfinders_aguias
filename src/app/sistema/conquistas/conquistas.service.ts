import { Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { URL_API } from '../../utils/app_api';


const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
const options = new RequestOptions({ headers: headers });
const formData = new FormData();

@Injectable()
export class ConquistaService {
  constructor(private http: Http) {}

  public getClassesDesbravador(id: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('id', id);

    return this.http.post(`${URL_API}/infoClasseDesbravador`, body)
      .map((resposta: any) => resposta.json() );
  }

  public getEspecialidadesDesbravador(id: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('id', id);
    return this.http.post(`${URL_API}/infoEspecialidadeDesbravador`, body)
      .map((resposta: any) => resposta.json() );
  }

  public getConquistasDesbravador(id: string): Observable<any> {
      let body = new URLSearchParams();
      body.set('id', id);
      return this.http.post(`${URL_API}/infoConquistaDesbravador`, body)
        .map((resposta: any) => resposta.json() );
  }

}
