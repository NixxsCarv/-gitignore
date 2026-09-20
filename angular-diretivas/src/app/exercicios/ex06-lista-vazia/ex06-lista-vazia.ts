import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex06-lista-vazia',
  imports: [CommonModule],
  templateUrl: './ex06-lista-vazia.html',
})
export class Ex06ListaVazia {
  private readonly nomesIniciais: string[] = ['Ana Souza', 'Bruno Lima', 'Carla Mendes', 'Diego Alves', 'Elisa Prado', 'Fábio Rocha'];

  nomes: string[] = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}
