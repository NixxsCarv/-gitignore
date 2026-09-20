import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { criarProdutos } from '../../data/produtos.data';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-ex08-produtos',
  imports: [CommonModule],
  templateUrl: './ex08-produtos.html',
})
export class Ex08Produtos {
  produtos: Produto[] = criarProdutos();
}
