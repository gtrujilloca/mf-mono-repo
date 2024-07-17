import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Product, LocalStorageKeys } from '@/common-lib/src/lib/domain';

@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  private _products: Product[] = [];

  private _channelSource = new BehaviorSubject<number>(0);
  channelQuantity$ = this._channelSource.asObservable();

  addProduct(product: Product): void {
    this._products.push(product);
    this.saveInLocalStorage(LocalStorageKeys.PRODUCTS, this._products)
    this._channelSource.next(this._products.length);
  }

  removeProduct(productId: number): void {
    this._products = this._products.filter(p => p.id !== productId);
    this.saveInLocalStorage(LocalStorageKeys.PRODUCTS, this._products)
    this._channelSource.next(this._products.length);
  }

  saveInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
