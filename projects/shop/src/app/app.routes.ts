import { Routes } from '@angular/router';
import { ProductShopComponent } from '@/shop/src/pages/product-shop/product-shop.component';
import { productDataResolver } from '@/shop/src/infrastructure'

export const routes: Routes = [
  {
    path: 'products',
    component: ProductShopComponent
  },
  {
    path: 'products/:id',
    loadComponent: () => import('@/shop/src/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    resolve: {
      product: productDataResolver
    }
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];
