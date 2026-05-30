import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Treinos } from './pages/treinos/treinos';
import { Estatisticas } from './pages/estatisticas/estatisticas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'treinos', component: Treinos },
  { path: 'estatisticas', component: Estatisticas }
];
