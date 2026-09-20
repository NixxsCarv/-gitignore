import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13-tarefas',
  imports: [CommonModule],
  templateUrl: './ex13-tarefas.html',
  styleUrl: './ex13-tarefas.css',
})
export class Ex13Tarefas {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Criar protótipo das telas', responsavel: 'Ana', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Configurar o GitHub', responsavel: 'Bruno', prioridade: 'media', concluida: true },
    { id: 3, titulo: 'Escrever a documentação', responsavel: 'Carla', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Criar a listagem de produtos', responsavel: 'Diego', prioridade: 'alta', concluida: true },
    { id: 5, titulo: 'Revisar o código', responsavel: 'Elisa', prioridade: 'media', concluida: false },
    { id: 6, titulo: 'Preparar a apresentação', responsavel: 'Fábio', prioridade: 'baixa', concluida: false },
  ];

  alternarSituacao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  contarConcluidas() {
    let total = 0;
    for (const tarefa of this.tarefas) {
      if (tarefa.concluida) {
        total = total + 1;
      }
    }
    return total;
  }

  contarPendentes() {
    return this.tarefas.length - this.contarConcluidas();
  }

  limparTarefas() {
    this.tarefas = [];
  }

  restaurarTarefas() {
    this.tarefas = [
      { id: 1, titulo: 'Criar protótipo das telas', responsavel: 'Ana', prioridade: 'alta', concluida: false },
      { id: 2, titulo: 'Configurar o GitHub', responsavel: 'Bruno', prioridade: 'media', concluida: true },
      { id: 3, titulo: 'Escrever a documentação', responsavel: 'Carla', prioridade: 'baixa', concluida: false },
      { id: 4, titulo: 'Criar a listagem de produtos', responsavel: 'Diego', prioridade: 'alta', concluida: true },
      { id: 5, titulo: 'Revisar o código', responsavel: 'Elisa', prioridade: 'media', concluida: false },
      { id: 6, titulo: 'Preparar a apresentação', responsavel: 'Fábio', prioridade: 'baixa', concluida: false },
    ];
  }
}
