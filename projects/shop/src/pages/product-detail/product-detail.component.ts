import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductsService } from '@/infrastructure';
import { Product } from '@/domain';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string = '';
  @Input() product!: Product;

  // product!: Product;
  // productSrv: ProductsService = inject(ProductsService);

  ngOnInit(): void {
    // this.getProduct(this.id);
    // console.log(this.product);

  }


  // getProduct(id: string) {
  //   this.productSrv.getProduct(id).subscribe(product => this.product = product);
  // }
}
