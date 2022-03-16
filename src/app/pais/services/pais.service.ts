import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {

    const url = `${ this.apiURrl}/name/${termino}`;

    return this.http.get(url);

  }





}
