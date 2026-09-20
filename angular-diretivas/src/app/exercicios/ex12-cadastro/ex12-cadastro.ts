import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ProdutoCadastrado {
  id: number;
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
  mensagemErro = '';

  produtos: ProdutoCadastrado[] = [
    { id: 1, nome: 'Teclado', quantidade: 5 },
    { id: 2, nome: 'Mouse', quantidade: 0 },
  ];

  private proximoId = 3;

  cadastrar(): void {
    const nomeLimpo = this.nome.trim();

    // Valida se o nome foi preenchido
    if (nomeLimpo === '') {
      this.mensagemErro = 'Não foi possível cadastrar: informe o nome do produto.';
      return;
    }

    // Valida se a quantidade é igual ou maior que zero
    if (this.quantidade === null || this.quantidade < 0) {
      this.mensagemErro = 'Não foi possível cadastrar: a quantidade deve ser igual ou maior que zero.';
      return;
    }

    this.produtos.push({ id: this.proximoId++, nome: nomeLimpo, quantidade: this.quantidade });

    // Limpa os campos e a mensagem após o cadastro
    this.nome = '';
    this.quantidade = null;
    this.mensagemErro = '';
  }

  excluir(id: number): void {
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
  }
}
