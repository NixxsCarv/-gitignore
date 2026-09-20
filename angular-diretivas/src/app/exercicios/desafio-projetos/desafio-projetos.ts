import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: StatusProjeto;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-projetos',
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio-projetos.html',
})
export class DesafioProjetos {
  readonly statusPermitidos: StatusProjeto[] = ['planejamento', 'desenvolvimento', 'testes', 'concluído'];

  /** Uma classe CSS diferente para cada status. */
  readonly classesStatus: Record<StatusProjeto, string> = {
    planejamento: 'status-planejamento',
    desenvolvimento: 'status-desenvolvimento',
    testes: 'status-testes',
    concluído: 'status-concluido',
  };

  private readonly projetosIniciais: Projeto[] = [
    { id: 1, titulo: 'Sistema de Biblioteca Escolar', equipe: 'Equipe Alfa', nota: 8.5, status: 'concluído', entregue: true },
    { id: 2, titulo: 'Aplicativo de Controle Financeiro', equipe: 'Equipe Beta', nota: 5.5, status: 'testes', entregue: false },
    { id: 3, titulo: 'Portal de Eventos do Campus', equipe: 'Equipe Gama', nota: null, status: 'desenvolvimento', entregue: false },
    { id: 4, titulo: 'Plataforma de Monitoria Online', equipe: 'Equipe Delta', nota: 7, status: 'concluído', entregue: true },
    { id: 5, titulo: 'Gestão de Estoque do Laboratório', equipe: 'Equipe Épsilon', nota: 6.5, status: 'planejamento', entregue: false },
    { id: 6, titulo: 'Agenda Inteligente de Estudos', equipe: 'Equipe Zeta', nota: null, status: 'planejamento', entregue: false },
  ];

  projetos: Projeto[] = this.projetosIniciais.map((projeto) => ({ ...projeto }));
  mostrarConcluidos = true;

  /** Projetos que devem aparecer na tela (respeita o botão mostrar/ocultar concluídos). */
  get projetosExibidos(): Projeto[] {
    return this.mostrarConcluidos
      ? this.projetos
      : this.projetos.filter((projeto) => projeto.status !== 'concluído');
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter((projeto) => projeto.status === 'concluído').length;
  }

  /** Posição do projeto na lista completa (não muda ao ocultar concluídos). */
  posicao(projeto: Projeto): number {
    return this.projetos.indexOf(projeto) + 1;
  }

  notaAlta(projeto: Projeto): boolean {
    return projeto.nota !== null && projeto.nota >= 7;
  }

  notaBaixa(projeto: Projeto): boolean {
    return projeto.nota !== null && projeto.nota < 6;
  }

  alterarStatus(projeto: Projeto, novoStatus: StatusProjeto): void {
    projeto.status = novoStatus;
  }

  alternarConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  limparProjetos(): void {
    this.projetos = [];
  }

  restaurarProjetos(): void {
    this.projetos = this.projetosIniciais.map((projeto) => ({ ...projeto }));
  }
}
