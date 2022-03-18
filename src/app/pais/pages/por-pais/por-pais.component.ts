import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.PaisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        console.log(err);
        this.paises = [];
      },
    });
  }
  sugerencias(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = true;

    this.PaisService.buscarPais(termino).subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.splice(0, 3);
      },
      error: (err) => {
        this.paisesSugeridos = [];
      },
    });

    // TODO: crear sugerencias
  }


  buscarSugerido(termino: string) {

    this.buscar(termino);
   



  }
}
