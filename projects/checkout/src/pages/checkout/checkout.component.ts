import { Component, inject, OnInit, SkipSelf } from '@angular/core';
import { ProductListComponent, TotalsComponent } from '@/checkout/src/components';
import { Product } from '@/checkout/src/domain';
import { CommonLibService } from '@/common-lib/src/public-api';

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
  products: Product [] = []
  totals = {
    subtotal: 0,
    tax: 0,
    total: 0
  };
  readonly tax = 0.15;

  private _commonLibService = inject(CommonLibService);

  quantity = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.processCheckoutData();
    this.getTotals();
    this._commonLibService.productQuantity$.subscribe(count => this.quantity = count);
  }

  processCheckoutData() {
    this.products = this._commonLibService.getProducts();
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

  removeProduct(productId: number ) {
    this._commonLibService.removeProduct(productId);
    this.getData();
  }

  log() {
    this._commonLibService.log();
  }
}
