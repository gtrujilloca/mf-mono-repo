import { Component, Input } from '@angular/core';
// import { ProductCardComponent } from '@/shop/src/components'
import { ProductCardComponent } from '@/shop/src/components'
import { Product } from '@/shop/src/domain';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {
  @Input({
    required: true,
  }) products: Product[] = [];

}
