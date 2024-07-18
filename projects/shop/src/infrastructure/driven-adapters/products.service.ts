import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Product, ProductDto } from '@/shop/src/domain';
import { mapToProduct } from '@/shop/src/infrastructure';
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
        map(response => response.map(mapToProduct)),
        catchError(err => {
          console.log(err);
          return of([])
        })
      )
  }

  getProduct(id:string): Observable<Product> {
    return this.http.get<ProductDto>(`${this.url}/products/${id}`)
      .pipe(
        map(mapToProduct),
        catchError(err => {
          console.log(err);
          return of({
            id: 0,
            title: '',
            price: '',
            description: '',
            category: '',
            image: '',
          })
        })
      )
  }
}
