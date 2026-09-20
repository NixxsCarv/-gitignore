import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05-lista-nomes',
  imports: [CommonModule],
  templateUrl: './ex05-lista-nomes.html',
})
export class Ex05ListaNomes {
  nomes: string[] = ['Ana Souza', 'Bruno Lima', 'Carla Mendes', 'Diego Alves', 'Elisa Prado', 'Fábio Rocha'];
}
