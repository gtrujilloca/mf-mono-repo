import { ProductListComponent, TotalsComponent } from '@/checkout/src/components';
import { Product } from '@/checkout/src/domain';
import { Component, inject, OnInit } from '@angular/core';
import { CommonLibService } from '@common-lib';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    ProductListComponent,
    TotalsComponent
  ],
  templateUrl: './checkout.component.html',
  styles: ``
})
export class CheckoutComponent implements OnInit {
  products: Product[] = []
  totals = {
    subtotal: 0,
    tax: 0,
    total: 0
  };
  readonly tax = 0.15;

  quantity = 0;
  private _sharedStore = inject(CommonLibService);
  readonly store = this._sharedStore.getStore();
  // readonly store = inject(shellStore, { host: true });

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.processCheckoutData();
    this.getTotals();
    // this._commonLibService.productQuantity$.subscribe(count => this.quantity = count);
    this.quantity = this.store.cartQuantity();
  }

  processCheckoutData() {
    // this.products = this._commonLibService.getProducts();
    this.products = Array.from(this.store.cartProducts().values());
    console.log(this.products);
  }

  getTotals() {

    const subtotal = this.products.reduce((acc, product) => acc + (+product.price * product.quantity), 0);
    const tax = subtotal * this.tax;

    this.totals = {
      subtotal,
      tax,
      total: subtotal + tax
    }
  }

  removeProduct(productId: number) {
    // this._commonLibService.removeProduct(productId);
    this.store.removeProduct(productId);
    this.getData();
  }

  log() {
    console.log(this.store.cartProducts());
    console.log(this.store.cartQuantity());


  }
}
