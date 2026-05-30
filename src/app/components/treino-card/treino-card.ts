import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-treino-card',
  imports: [],
  templateUrl: './treino-card.html',
  styleUrl: './treino-card.css',
})
export class TreinoCard {

  @Input() treino: any;

  @Output() concluir = new EventEmitter<any>();

  marcarConcluido() {
    this.concluir.emit(this.treino);
  }

}
