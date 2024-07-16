import { Component, Input } from '@angular/core';
// import { ProductCardComponent } from '@/components'
import { ProductCardComponent } from '@/components'
import { Product } from '@/domain';

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
