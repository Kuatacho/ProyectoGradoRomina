import { Routes } from '@angular/router';
import { Modulos } from './components/modulos/modulos';
import { Home } from './components/home/home';
import { Learning } from './components/learning/learning';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home }, // Asegúrate de tener este componente
  { path: 'modulos', component: Modulos },
  {path:'learning',component:Learning}
];
