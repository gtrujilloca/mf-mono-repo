import { inject, Injectable } from '@angular/core';
import { shellStore } from '@/shell/src/state';

@Injectable({
  providedIn: 'root'
})
export class SharedStoreService {
  private readonly _store = inject(shellStore);
  private readonly id = new Date().getTime();

  constructor() {
    console.log("se creo un servicio con id: ", this.id);

  }

  getStore() {
    return this._store;
  }
}
