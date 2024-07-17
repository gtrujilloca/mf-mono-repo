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

  addToCart(){
    this._commonLibService.addProduct(this.product);
  }
}
