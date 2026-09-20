import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03-idade',
  imports: [CommonModule],
  templateUrl: './ex03-idade.html',
})
export class Ex03Idade {
  idade = 25;

  aumentar(): void {
    this.idade++;
  }

  diminuir(): void {
    // Não permite valores negativos
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
