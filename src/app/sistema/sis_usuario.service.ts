import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded' });
const options = new RequestOptions({ headers: headers });
const formData = new FormData();

@Injectable()
export class DesbravadorService {

  private baseUrl: string = 'http://127.0.0.1:4100';

  constructor(private http: Http) { }

  public logarUsuario(login: string, senha: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('senha', senha);

    return this.http.post(`${this.baseUrl}/loginDesbravador`, body)
      .map((resposta: any) => resposta.json());
  }

  public informacaoPainel(id: string): Observable<any> {
    let body = new URLSearchParams();

    body.set('id', id);

    return this.http.post(`${this.baseUrl}/infoDadosDesbravadorPainel`, body)
      .map((resposta: any) => resposta.json());
  }



}
