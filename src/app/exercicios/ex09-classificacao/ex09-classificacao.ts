import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex09-classificacao',
  imports: [CommonModule],
  templateUrl: './ex09-classificacao.html',
  styleUrl: './ex09-classificacao.css',
})
export class Ex09Classificacao {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 150, quantidade: 10 },
    { id: 2, nome: 'Mouse', preco: 80, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 0 },
    { id: 4, nome: 'Headset', preco: 220, quantidade: 5 },
    { id: 5, nome: 'Webcam', preco: 250, quantidade: 12 },
  ];
}
