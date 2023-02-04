import { HttpService } from 'src/app/services/http.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.scss']
})
export class DeleteInvoiceComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private http: HttpService
  ) { }

  ngOnInit(): void { }

  delete() {
    const { data: { id }} = this;
    this.http.delete(id);
  }
}
