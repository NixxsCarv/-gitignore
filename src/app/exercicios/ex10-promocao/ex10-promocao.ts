import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10-promocao',
  imports: [CommonModule],
  templateUrl: './ex10-promocao.html',
  styleUrl: './ex10-promocao.css',
})
export class Ex10Promocao {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 10, promocao: false },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3, promocao: true },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 0, promocao: false },
    { id: 4, nome: 'Headset', preco: 220, quantidade: 5, promocao: true },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 12, promocao: false },
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }
}
