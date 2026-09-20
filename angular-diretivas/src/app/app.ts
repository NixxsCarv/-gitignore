import { Component } from '@angular/core';
import { Ex01Mensagem } from './exercicios/ex01-mensagem/ex01-mensagem';
import { Ex02Usuario } from './exercicios/ex02-usuario/ex02-usuario';
import { Ex03Idade } from './exercicios/ex03-idade/ex03-idade';
import { Ex04Estoque } from './exercicios/ex04-estoque/ex04-estoque';
import { Ex05ListaNomes } from './exercicios/ex05-lista-nomes/ex05-lista-nomes';
import { Ex06ListaVazia } from './exercicios/ex06-lista-vazia/ex06-lista-vazia';
import { Ex07CoresAlternadas } from './exercicios/ex07-cores-alternadas/ex07-cores-alternadas';
import { Ex08Produtos } from './exercicios/ex08-produtos/ex08-produtos';
import { Ex09Classificacao } from './exercicios/ex09-classificacao/ex09-classificacao';
import { Ex10Promocao } from './exercicios/ex10-promocao/ex10-promocao';
import { Ex11Disponiveis } from './exercicios/ex11-disponiveis/ex11-disponiveis';
import { Ex12Cadastro } from './exercicios/ex12-cadastro/ex12-cadastro';
import { Ex13Tarefas } from './exercicios/ex13-tarefas/ex13-tarefas';
import { Ex14SintaxeModerna } from './exercicios/ex14-sintaxe-moderna/ex14-sintaxe-moderna';
import { DesafioProjetos } from './exercicios/desafio-projetos/desafio-projetos';

@Component({
  selector: 'app-root',
  imports: [
    Ex01Mensagem,
    Ex02Usuario,
    Ex03Idade,
    Ex04Estoque,
    Ex05ListaNomes,
    Ex06ListaVazia,
    Ex07CoresAlternadas,
    Ex08Produtos,
    Ex09Classificacao,
    Ex10Promocao,
    Ex11Disponiveis,
    Ex12Cadastro,
    Ex13Tarefas,
    Ex14SintaxeModerna,
    DesafioProjetos,
  ],
  templateUrl: './app.html',
})
export class App {
  /** Links do índice no topo da página. */
  readonly indice = [
    { id: 'ex01', rotulo: '1' }, { id: 'ex02', rotulo: '2' }, { id: 'ex03', rotulo: '3' },
    { id: 'ex04', rotulo: '4' }, { id: 'ex05', rotulo: '5' }, { id: 'ex06', rotulo: '6' },
    { id: 'ex07', rotulo: '7' }, { id: 'ex08', rotulo: '8' }, { id: 'ex09', rotulo: '9' },
    { id: 'ex10', rotulo: '10' }, { id: 'ex11', rotulo: '11' }, { id: 'ex12', rotulo: '12' },
    { id: 'ex13', rotulo: '13' }, { id: 'ex14', rotulo: '14' }, { id: 'desafio', rotulo: 'Desafio' },
  ];
}
