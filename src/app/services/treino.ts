import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Treino {

  constructor(private http: HttpClient) {}

  getTreinos() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }

}
