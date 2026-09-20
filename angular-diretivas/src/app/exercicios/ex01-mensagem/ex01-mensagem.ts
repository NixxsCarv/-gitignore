import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01-mensagem',
  imports: [CommonModule],
  templateUrl: './ex01-mensagem.html',
})
export class Ex01Mensagem {
  mensagemVisivel = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
