import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-projetos',
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio-projetos.html',
  styleUrl: './desafio-projetos.css',
})
export class DesafioProjetos {
  mostrarConcluidos = true;
  projetos: Projeto[] = [
    { id: 1, titulo: 'Sistema de Biblioteca', equipe: 'Equipe Alfa', nota: 8.5, status: 'concluído', entregue: true },
    { id: 2, titulo: 'App de Controle Financeiro', equipe: 'Equipe Beta', nota: 5.5, status: 'testes', entregue: false },
    { id: 3, titulo: 'Portal de Eventos', equipe: 'Equipe Gama', nota: null, status: 'desenvolvimento', entregue: false },
    { id: 4, titulo: 'Plataforma de Monitoria', equipe: 'Equipe Delta', nota: 7, status: 'concluído', entregue: true },
    { id: 5, titulo: 'Gestão de Estoque', equipe: 'Equipe Épsilon', nota: 6.5, status: 'planejamento', entregue: false },
    { id: 6, titulo: 'Agenda de Estudos', equipe: 'Equipe Zeta', nota: null, status: 'planejamento', entregue: false },
  ];

  alternarConcluidos() {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  contarConcluidos() {
    let total = 0;
    for (const projeto of this.projetos) {
      if (projeto.status === 'concluído') {
        total = total + 1;
      }
    }
    return total;
  }

  limparProjetos() {
    this.projetos = [];
  }

  restaurarProjetos() {
    this.projetos = [
      { id: 1, titulo: 'Sistema de Biblioteca', equipe: 'Equipe Alfa', nota: 8.5, status: 'concluído', entregue: true },
      { id: 2, titulo: 'App de Controle Financeiro', equipe: 'Equipe Beta', nota: 5.5, status: 'testes', entregue: false },
      { id: 3, titulo: 'Portal de Eventos', equipe: 'Equipe Gama', nota: null, status: 'desenvolvimento', entregue: false },
      { id: 4, titulo: 'Plataforma de Monitoria', equipe: 'Equipe Delta', nota: 7, status: 'concluído', entregue: true },
      { id: 5, titulo: 'Gestão de Estoque', equipe: 'Equipe Épsilon', nota: 6.5, status: 'planejamento', entregue: false },
      { id: 6, titulo: 'Agenda de Estudos', equipe: 'Equipe Zeta', nota: null, status: 'planejamento', entregue: false },
    ];
  }
}
