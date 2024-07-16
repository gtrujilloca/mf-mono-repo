import { Routes } from '@angular/router';
import { ProductShopComponent } from '@/pages/product-shop/product-shop.component';
import { productDataResolver } from '@/infrastructure'

export const routes: Routes = [
  {
    path: '',
    component: ProductShopComponent
  },
  {
    path: 'products/:id',
    loadComponent: () => import('@/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    resolve: {
      product: productDataResolver
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
