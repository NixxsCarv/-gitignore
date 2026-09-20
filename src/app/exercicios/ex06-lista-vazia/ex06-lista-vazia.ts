import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex06-lista-vazia',
  imports: [CommonModule],
  templateUrl: './ex06-lista-vazia.html',
})
export class Ex06ListaVazia {
  nomes: string[] = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa', 'Fábio'];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa', 'Fábio'];
  }
}
