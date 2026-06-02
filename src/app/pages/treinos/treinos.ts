import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreinoCard } from '../../components/treino-card/treino-card';
import { Treino } from '../../services/treino';

@Component({
  selector: 'app-treinos',
  imports: [FormsModule, TreinoCard],
  templateUrl: './treinos.html',
  styleUrl: './treinos.css',
})
export class Treinos {

  nome = '';
  grupo = '';
  dificuldade = 1;

  treinos: any[] = [];

  constructor(private treinoService: Treino) {

  this.carregarTreinos();

}
  carregarTreinos() {

  this.treinoService.getTreinos()
    .subscribe((dados: any) => {

      this.treinos = [...dados];

    });

}

  adicionarTreino() {

    if (!this.nome || !this.grupo) {
      return;
    }

    const novoTreino = {
      nome: this.nome,
      grupo: this.grupo,
      dificuldade: this.dificuldade,
      feito: false
    };

    this.treinoService.adicionarTreino(novoTreino)
  .subscribe(() => {

    this.carregarTreinos();

  });

    this.nome = '';
    this.grupo = '';
    this.dificuldade = 1;
  }

  concluirTreino(treino: any) {

  treino.feito = true;

  this.treinoService
    .atualizarTreino(treino.id, treino)
    .subscribe(() => {

      this.carregarTreinos();

    });

}

}
