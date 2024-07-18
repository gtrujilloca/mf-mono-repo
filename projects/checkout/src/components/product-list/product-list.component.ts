import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Product } from "@/checkout/src/domain";
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {
  @Input() products: Product[] = []
  @Output() removeProduct = new EventEmitter<number>();



  remove(productId: number) {
    this.removeProduct.emit(productId);
  }

}
