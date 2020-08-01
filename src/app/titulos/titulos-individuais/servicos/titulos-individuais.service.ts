import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitulosIndividuais } from '../modelos/titulos-individuais';

@Injectable({
  providedIn: 'root'
})
export class TitulosIndividuaisService {
  titulos: TitulosIndividuais[] = [];

  constructor() { }

  getTitulos() {
    return this.titulos = [
      { titulo: '00001', proprietario: 'João da Silva', situacao: 'Ativo', admissao: new Date(2013, 4, 1), saida: null, observacao: 'teste' },
      { titulo: '00002', proprietario: 'Maria de Souza', situacao: 'Inativo', admissao: new Date(2013, 4, 15), saida: new Date(2019, 9, 18), observacao: 'teste' },
      { titulo: '00003', proprietario: 'José dos Santos', situacao: 'Ativo', admissao: new Date(2020, 4, 1), saida: null, observacao: 'teste' },
    ];
  }

  insertTitulos(titulo: TitulosIndividuais) {
    return this.titulos.push(titulo);
  }

  findTitulo(titulo: string) {
    console.log(titulo);
  }
}
