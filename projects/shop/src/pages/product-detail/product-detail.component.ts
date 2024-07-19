import { Product } from '@/shop/src/domain';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonLibService } from "@common-lib";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export class ProductDetailComponent {
  @Input() id: string = '';
  @Input() product!: Product;

  // private _commonLibService: CommonLibService = inject(CommonLibService);


  addToCart() {
    // this._commonLibService.addProduct(this.product);
  }
}
