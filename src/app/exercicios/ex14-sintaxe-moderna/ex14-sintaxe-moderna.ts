import { Component } from '@angular/core';

// Exercício 14: conversão para a sintaxe moderna (@if, @else, @for, @empty e track).
// Exercícios convertidos: 2 (usuário), 11 (produtos disponíveis) e 13 (tarefas).

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex14-sintaxe-moderna',
  imports: [],
  templateUrl: './ex14-sintaxe-moderna.html',
  styleUrl: './ex14-sintaxe-moderna.css',
})
export class Ex14SintaxeModerna {
  // Exercício 2
  usuarioLogado = false;

  // Exercício 11
  somenteDisponiveis = false;
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 10 },
    { id: 2, nome: 'Mouse', quantidade: 3 },
    { id: 3, nome: 'Monitor', quantidade: 0 },
    { id: 4, nome: 'Headset', quantidade: 5 },
  ];

  // Exercício 13
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar protótipo das telas', concluida: false },
    { id: 2, titulo: 'Configurar o GitHub', concluida: true },
    { id: 3, titulo: 'Escrever a documentação', concluida: false },
  ];

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

  alternarFiltro() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }

  alternarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  limparProdutos() {
    this.produtos = [];
  }

  limparTarefas() {
    this.tarefas = [];
  }
}
