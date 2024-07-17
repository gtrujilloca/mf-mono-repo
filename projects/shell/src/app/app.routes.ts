import { Routes } from '@angular/router';
import { HomeComponent } from '@/shell/src/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    loadComponent: () => import('shop/Component').then(c => c.AppComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('checkout/Component').then(m => m.AppComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
