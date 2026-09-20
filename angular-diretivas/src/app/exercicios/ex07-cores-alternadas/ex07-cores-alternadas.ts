import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex07-cores-alternadas',
  imports: [CommonModule],
  templateUrl: './ex07-cores-alternadas.html',
})
export class Ex07CoresAlternadas {
  disciplinas: string[] = [
    'Programação Web',
    'Banco de Dados',
    'Engenharia de Software',
    'Redes de Computadores',
    'Sistemas Operacionais',
    'Projeto Integrador',
  ];
}
