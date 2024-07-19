import { Product } from '@/shop/src/domain';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonLibService } from "@common-lib";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterLink
  ],

  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

  @Input() product!: Product;
  private _commonLibService: CommonLibService = inject(CommonLibService);
  // readonly store = inject(shellStore);
  private _sharedStore = inject(CommonLibService);
  readonly store = this._sharedStore.getStore();


  addToCart(){
    // this._commonLibService.addProduct(this.product);
    this.store.addProduct(this.product);

    console.log(this.store.cartProducts())
    console.log(this.store.cartQuantity());

  }
}
