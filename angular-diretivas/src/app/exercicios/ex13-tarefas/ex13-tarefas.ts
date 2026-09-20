import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Prioridade = 'baixa' | 'media' | 'alta';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: Prioridade;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13-tarefas',
  imports: [CommonModule],
  templateUrl: './ex13-tarefas.html',
})
export class Ex13Tarefas {
  private readonly tarefasIniciais: Tarefa[] = [
    { id: 1, titulo: 'Criar protótipo das telas', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Configurar o repositório no GitHub', responsavel: 'Bruno', prioridade: 'media', concluida: true },
    { id: 3, titulo: 'Escrever a documentação', responsavel: 'Carla', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Implementar a listagem de produtos', responsavel: 'Diego', prioridade: 'alta', concluida: true },
    { id: 5, titulo: 'Revisar o código da equipe', responsavel: 'Elisa', prioridade: 'media', concluida: false },
    { id: 6, titulo: 'Preparar a apresentação final', responsavel: 'Fábio', prioridade: 'baixa', concluida: false },
  ];

  tarefas: Tarefa[] = this.tarefasIniciais.map((tarefa) => ({ ...tarefa }));

  readonly rotulosPrioridade: Record<Prioridade, string> = {
    baixa: 'Baixa',
    media: 'Média',
    alta: 'Alta',
  };

  get total(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter((tarefa) => tarefa.concluida).length;
  }

  get totalPendentes(): number {
    return this.total - this.totalConcluidas;
  }

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
