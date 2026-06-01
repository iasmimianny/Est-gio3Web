import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Treino {

  private apiUrl = 'http://localhost:3000/treinos';

  constructor(private http: HttpClient) {}

  getTreinos() {
    return this.http.get(this.apiUrl);
  }

  adicionarTreino(treino: any) {
    return this.http.post(this.apiUrl, treino);
  }

}
