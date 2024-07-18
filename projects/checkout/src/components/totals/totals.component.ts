import { Component, Input } from '@angular/core';
import { Total } from '@/checkout/src/domain';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-totals',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './totals.component.html',
  styles: ``
})
export class TotalsComponent {
  @Input() data!: Total;

}
