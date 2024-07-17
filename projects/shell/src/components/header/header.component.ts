import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HomeLink } from '@/shell/src/domain';
import { homeLinks } from '@/shell/src/constants';
import { RouterLink } from '@angular/router';
import { CommonLibService } from "@common-lib";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  links: HomeLink[] = homeLinks;
  private _commonLibService: CommonLibService = inject(CommonLibService);

  get getCartCount():  Observable<number> {
    return this._commonLibService.channelQuantity$;
  }


}
