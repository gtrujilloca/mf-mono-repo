import { computed, inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Product, LocalStorageKeys } from '@/common-lib/src/lib/domain';
import { shellStore } from '@/shell/src/state';

@Injectable({
  providedIn: 'root'
})
export class CommonLibService {

  private readonly _store = inject(shellStore);
  private readonly id = new Date().getTime();

  constructor() {
    console.log("se creo un servicio con id: ", this.id);

  }

  getStore() {
    return this._store;
  }
}
