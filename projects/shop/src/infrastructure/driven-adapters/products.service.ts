import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductDto } from '@/domain';
import { mapToProduct } from '@/infrastructure';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);
  url = 'https://fakestoreapi.com'
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDto[]>(`${this.url}/products`)
      .pipe(
        map(response => response.map(mapToProduct))
      )
  }

  getProduct(id:string): Observable<Product> {
    return this.http.get<ProductDto>(`${this.url}/products/${id}`)
      .pipe(
        map(mapToProduct)
      )
  }
}
