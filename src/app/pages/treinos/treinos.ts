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

  this.treinoService.getTreinos()
  .subscribe((dados: any) => {

    const exercicios = [
      'Agachamento',
      'Supino',
      'Rosca Direta',
      'Desenvolvimento',
      'Leg Press'
    ];

    this.treinos = dados.slice(0, 5).map((item: any, index: number) => ({
      nome: exercicios[index],
      grupo: 'Academia',
      dificuldade: 3,
      feito: item.completed
    }));

  });

}

  adicionarTreino() {

    if (!this.nome || !this.grupo) {
      return;
    }

    this.treinos.push({
      nome: this.nome,
      grupo: this.grupo,
      dificuldade: this.dificuldade,
      feito: false
    });

    this.nome = '';
    this.grupo = '';
    this.dificuldade = 1;
  }
  concluirTreino(treino: any) {
  treino.feito = true;
}
}
