import { Component } from '@angular/core';
import { HomeLink } from '@/domain';
import { homeLinks } from '@/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  links: HomeLink[] = homeLinks;
}
