import { ResolveFn } from '@angular/router';
// import { ProductsService } from '@/infrastructure';
import { inject } from '@angular/core';
import { ProductsService } from '@/infrastructure';
import { Product } from '@/domain';

export const productDataResolver: ResolveFn<Product> = (route, state) => {
  const id = route.paramMap.get('id') || '';

  return inject(ProductsService).getProduct(id);
};
