import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { criarProdutosPromocionais } from '../../data/produtos.data';
import { ProdutoPromocional } from '../../models/produto.model';

@Component({
  selector: 'app-ex11-disponiveis',
  imports: [CommonModule],
  templateUrl: './ex11-disponiveis.html',
})
export class Ex11Disponiveis {
  produtos: ProdutoPromocional[] = criarProdutosPromocionais();
  somenteDisponiveis = false;

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
