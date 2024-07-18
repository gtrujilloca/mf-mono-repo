import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HomeLink } from '@/shell/src/domain';
import { homeLinks } from '@/shell/src/constants';
import { RouterLink } from '@angular/router';
import { CommonLibService } from "@common-lib";
import { AsyncPipe } from '@angular/common';
import { effect } from "@angular/core"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styles: ``,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  links: HomeLink[] = homeLinks;
  private _commonLibService: CommonLibService = inject(CommonLibService);
  quantity = 0;
  // private _detectorRef = inject(ChangeDetectorRef);
  // productQuantity = this._commonLibService.productQuantity$;

  constructor() {
    // effect(() => {
    //   console.log(this._commonLibService.productQuantity$());
    // })

  }
  ngOnInit(): void {
    // this._detectorRef.detectChanges();
    this._commonLibService.productQuantity$.subscribe(count => this.quantity = count);
  }

  log() {
    this._commonLibService.log();
  }

}
