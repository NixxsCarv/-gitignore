import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex01-mensagem',
  imports: [CommonModule],
  templateUrl: './ex01-mensagem.html',
})
export class Ex01Mensagem {
  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
