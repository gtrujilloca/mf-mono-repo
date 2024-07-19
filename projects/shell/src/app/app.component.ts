import { FooterComponent, HeaderComponent } from '@/shell/src/components';
import { shellStore } from '@/shell/src/state';
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

  readonly store = inject(shellStore);


  ngOnInit(): void {
    this.store.addProduct({id: 1, title: 'test', price: '10', description: 'test', image: ''})

    setTimeout(() => {
      console.log(this.store.cartProducts());

    }, 1000);
  }


}
