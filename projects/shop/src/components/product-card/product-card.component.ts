import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@/domain';

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
}
