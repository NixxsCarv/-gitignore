import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex04-estoque',
  imports: [CommonModule],
  templateUrl: './ex04-estoque.html',
})
export class Ex04Estoque {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar() {
    this.quantidadeEstoque = this.quantidadeEstoque + 1;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque = this.quantidadeEstoque - 1;
    }
  }
}
