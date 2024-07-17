import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '@/shop/src/infrastructure';
import { ProductListComponent } from '@/shop/src/components';
import { Product } from '@/shop/src/domain';

@Component({
  selector: 'app-product-shop',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './product-shop.component.html',
  styles: ``
})
export class ProductShopComponent implements OnInit {
  productSrv: ProductsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productSrv.getProducts()
    .subscribe(products => this.products = products);
  }

}
