import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './ex12-cadastro.html',
})
export class Ex12Cadastro {
  nome = '';
  quantidade: number | null = null;
  mensagem = '';

  produtos: Produto[] = [
    { nome: 'Teclado', quantidade: 5 },
    { nome: 'Mouse', quantidade: 0 },
  ];

  cadastrar() {
    if (this.nome.trim() === '') {
      this.mensagem = 'Não foi possível cadastrar: preencha o nome.';
      return;
    }

    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagem = 'Não foi possível cadastrar: a quantidade deve ser 0 ou maior.';
      return;
    }

    this.produtos.push({ nome: this.nome, quantidade: this.quantidade });

    this.nome = '';
    this.quantidade = null;
    this.mensagem = '';
  }

  excluir(posicao: number) {
    this.produtos.splice(posicao, 1);
  }
}
