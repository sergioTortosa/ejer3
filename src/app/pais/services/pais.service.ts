import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${ this.apiURrl}/name/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${ this.apiURrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha(id: string): Observable<Country[]> {

    const url = `${ this.apiURrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);

  }

  buscarRegion(region: string): Observable<Country[]> {


    const url = `${ this.apiURrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url);

    
  }



}
