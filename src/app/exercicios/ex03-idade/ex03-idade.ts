import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex03-idade',
  imports: [CommonModule],
  templateUrl: './ex03-idade.html',
})
export class Ex03Idade {
  idade = 20;

  aumentar() {
    this.idade = this.idade + 1;
  }

  diminuir() {
    if (this.idade > 0) {
      this.idade = this.idade - 1;
    }
  }
}
