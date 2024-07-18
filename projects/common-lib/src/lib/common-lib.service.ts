import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Product, LocalStorageKeys } from '@/common-lib/src/lib/domain';

@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  private _products: Map<number, Product> = new Map<number, Product>();

  // productQuantity$ = signal<number>(0);
  productQuantity$ = new BehaviorSubject<number>(0);

  constructor() {
    console.log('CommonLibService created');

    const products = localStorage.getItem(LocalStorageKeys.PRODUCTS);
    if (products) {
      const newProducts: Product[] = JSON.parse(products);
      this._products = new Map<number, Product>(newProducts.map(product => [product.id, product]));
      this.updateCartQuantity();
    }
  }

  addProduct(product: Omit<Product, 'quantity'>): void {
    const tempProduct: Product = this._products.get(product.id) || {...product, quantity: 0};
    tempProduct.quantity += 1;
    this._products.set(product.id, tempProduct);
    this.updateCartQuantity();
    this.saveInLocalStorage(LocalStorageKeys.PRODUCTS, Array.from(this._products.values()));
  }

  removeProduct(productId: number): void {
    this._products.delete(productId);
    this.updateCartQuantity();
    this.saveInLocalStorage(LocalStorageKeys.PRODUCTS, Array.from(this._products.values()));
  }

  saveInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  updateCartQuantity() {
    let count = 0;
    this._products.forEach((product) => count += product.quantity);
    // this.productQuantity$.set(count);
    this.productQuantity$.next(count);
  }

  getProducts(): Product[] {
    return Array.from(this._products.values());
  }

  log(){
    // console.log(this.productQuantity$());
    // this.productQuantity$.update(count => count + 1);
    this.productQuantity$.next(this.productQuantity$.value + 1);
  }
}
