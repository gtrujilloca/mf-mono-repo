import { CommonLibService } from '@/common-lib/src/public-api';
import { homeLinks } from '@/shell/src/constants';
import { HomeLink } from '@/shell/src/domain';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  links: HomeLink[] = homeLinks;
  // private _commonLibService: CommonLibService = inject(CommonLibService);
  private _sharedStore = inject(CommonLibService);
  readonly store = this._sharedStore.getStore();
  quantity = computed(() => this.store.cartQuantity());

  constructor() {
    // effect(() => {
    //   this.quantity = this.store.cartQuantity();
    // });
  }
  ngOnInit(): void {
    // this.quantity = this.store.cartQuantity();
    // this._detectorRef.detectChanges();
    // this._commonLibService.productQuantity$.subscribe(count => this.quantity = count);
  }


  log() {
    // this._commonLibService.log();
   console.log(this.quantity());
   this.store.addProduct({id: +new Date().getTime().toFixed(0), title: 'test3', price: '10', description: 'test', image: ''})
  }

}
