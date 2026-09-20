import { Component } from '@angular/core';

/**
 * Exercício 14 – conversão para a sintaxe moderna (@if, @else, @for, @empty, track).
 *
 * Exercícios convertidos:
 *  - Exercício 2  (situação do usuário)      -> @if / @else
 *  - Exercício 11 (produtos disponíveis)     -> @for + @if, track produto.id
 *  - Exercício 13 (lista de tarefas)         -> @for + @empty + @if / @else, track tarefa.id
 *
 * Repare que o componente NÃO precisa importar CommonModule: o controle de fluxo
 * moderno faz parte do próprio template do Angular.
 */

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex14-sintaxe-moderna',
  imports: [],
  templateUrl: './ex14-sintaxe-moderna.html',
})
export class Ex14SintaxeModerna {
  // --- Exercício 2 convertido ---
  usuarioLogado = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  // --- Exercício 11 convertido ---
  private readonly produtosIniciais: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', quantidade: 12 },
    { id: 2, nome: 'Mouse sem fio', quantidade: 3 },
    { id: 3, nome: 'Monitor 24 polegadas', quantidade: 0 },
    { id: 4, nome: 'Headset gamer', quantidade: 5 },
  ];

  produtos: Produto[] = [...this.produtosIniciais];
  somenteDisponiveis = false;

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }

  limparProdutos(): void {
    this.produtos = [];
  }

  restaurarProdutos(): void {
    this.produtos = [...this.produtosIniciais];
  }

  // --- Exercício 13 convertido ---
  private readonly tarefasIniciais: Tarefa[] = [
    { id: 1, titulo: 'Criar protótipo das telas', responsavel: 'Ana', concluida: false },
    { id: 2, titulo: 'Configurar o repositório', responsavel: 'Bruno', concluida: true },
    { id: 3, titulo: 'Escrever a documentação', responsavel: 'Carla', concluida: false },
  ];

  tarefas: Tarefa[] = this.tarefasIniciais.map((tarefa) => ({ ...tarefa }));

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  limparTarefas(): void {
    this.tarefas = [];
  }

  restaurarTarefas(): void {
    this.tarefas = this.tarefasIniciais.map((tarefa) => ({ ...tarefa }));
  }
}
