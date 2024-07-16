import { Routes } from '@angular/router';
import { HomeComponent } from '@/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'shop',
  //   loadComponent: () => import('shop').then(m => m.Component)
  // },
  // {
  //   path: 'checkout',
  //   loadComponent: () => import('checkout').then(m => m.Component)
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
