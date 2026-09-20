import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex07-cores-alternadas',
  imports: [CommonModule],
  templateUrl: './ex07-cores-alternadas.html',
  styleUrl: './ex07-cores-alternadas.css',
})
export class Ex07CoresAlternadas {
  disciplinas = [
    'Programação Web',
    'Banco de Dados',
    'Engenharia de Software',
    'Redes de Computadores',
    'Sistemas Operacionais',
    'Projeto Integrador',
  ];
}
