import { FooterComponent, HeaderComponent } from '@/shell/src/components';
import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'shell';
}
