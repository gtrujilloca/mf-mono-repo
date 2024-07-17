import { Routes } from '@angular/router';
import { HomeComponent } from '@/shell/src/pages';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'shop',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'shop',
        exposedModule: './ShopRoutes'
      })
      .then(m => m['routes'])
      .catch(err => console.log(err))
  },
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'checkout',
        exposedModule: './CheckoutRoutes'
      })
      .then(m => m['routes'])
      .catch(err => console.log(err))
  },

  {
    path: '**',
    redirectTo: '',
  }
];
