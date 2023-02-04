import { Status } from 'src/app/models/enums';
import { Invoice } from 'src/app/models/interfaces';
import { SorterDirective } from 'src/app/directives/sorter.directive';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

  @Input('invoice') public invoice: Invoice = null as any;
  @Input('index') public index: number = null as any;
  @Input('sorter') public sorter: SorterDirective = null as any;

  @Output('edit') public edit = new EventEmitter<Invoice>();
  @Output('delete') public delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getStatusStr(status: number) {
    return Status[status].replace(/[A-Z]/g, match => match.replace(match, ' ' + match));
  }
}
