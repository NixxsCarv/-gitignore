import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02-usuario',
  imports: [CommonModule],
  templateUrl: './ex02-usuario.html',
})
export class Ex02Usuario {
  usuarioLogado = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
