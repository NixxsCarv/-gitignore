import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex05-lista-nomes',
  imports: [CommonModule],
  templateUrl: './ex05-lista-nomes.html',
})
export class Ex05ListaNomes {
  nomes = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa', 'Fábio'];
}
