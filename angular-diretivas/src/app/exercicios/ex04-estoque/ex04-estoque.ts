import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04-estoque',
  imports: [CommonModule],
  templateUrl: './ex04-estoque.html',
})
export class Ex04Estoque {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar(): void {
    this.quantidadeEstoque++;
  }

  remover(): void {
    // Impede que o estoque fique negativo
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
