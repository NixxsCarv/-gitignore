import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { criarProdutos } from '../../data/produtos.data';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-ex09-classificacao',
  imports: [CommonModule],
  templateUrl: './ex09-classificacao.html',
})
export class Ex09Classificacao {
  produtos: Produto[] = criarProdutos();

  /** Devolve a classe de cor conforme a quantidade em estoque. */
  classeEstoque(produto: Produto): string {
    if (produto.quantidade === 0) {
      return 'estoque-vermelho';
    }
    if (produto.quantidade <= 5) {
      return 'estoque-amarelo';
    }
    return 'estoque-verde';
  }
}
