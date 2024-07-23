import { CommonLibService } from '@common-lib';
import { FooterComponent, HeaderComponent } from '@/shell/src/components';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { buildRoutes } from '../infrastructre/helpers/routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'shell';
  private _sharedStore = inject(CommonLibService);
  readonly store = this._sharedStore.getStore();


  ngOnInit(): void {
    this.store.addProduct({id: 1, title: 'test', price: '10', description: 'test', image: ''})

    setTimeout(() => {
      console.log(this.store.cartProducts());
      this.store.addProduct({id: 2, title: 'test2', price: '10', description: 'test', image: ''})
      this.store.addProduct({id: 3, title: 'test3', price: '10', description: 'test', image: ''})
    }, 1000);
  }


}
