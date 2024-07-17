import { ResolveFn } from '@angular/router';
// import { ProductsService } from '@/shop/src/infrastructure';
import { inject } from '@angular/core';
import { ProductsService } from '@/shop/src/infrastructure';
import { Product } from '@/shop/src/domain';

export const productDataResolver: ResolveFn<Product> = (route, state) => {
  const id = route.paramMap.get('id') || '';

  return inject(ProductsService).getProduct(id);
};
