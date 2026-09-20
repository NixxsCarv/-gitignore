import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { criarProdutosPromocionais } from '../../data/produtos.data';
import { ProdutoPromocional } from '../../models/produto.model';

@Component({
  selector: 'app-ex10-promocao',
  imports: [CommonModule],
  templateUrl: './ex10-promocao.html',
})
export class Ex10Promocao {
  produtos: ProdutoPromocional[] = criarProdutosPromocionais();

  alternarPromocao(produto: ProdutoPromocional): void {
    produto.promocao = !produto.promocao;
  }
}
