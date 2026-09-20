import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex02-usuario',
  imports: [CommonModule],
  templateUrl: './ex02-usuario.html',
})
export class Ex02Usuario {
  usuarioLogado = false;

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
