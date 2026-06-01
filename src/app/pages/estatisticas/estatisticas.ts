import { Component } from '@angular/core';
import { Treino } from '../../services/treino';

@Component({
  selector: 'app-estatisticas',
  imports: [],
  templateUrl: './estatisticas.html',
  styleUrl: './estatisticas.css',
})
export class Estatisticas {

  total = 0;
  concluidos = 0;
  pendentes = 0;

  constructor(private treinoService: Treino) {

    this.treinoService.getTreinos()
      .subscribe((treinos: any) => {

        console.log(treinos);

        this.total = treinos.length;

        this.concluidos = treinos.filter(
          (treino: any) => treino.feito
        ).length;

        this.pendentes = this.total - this.concluidos;

      });

  }

}
