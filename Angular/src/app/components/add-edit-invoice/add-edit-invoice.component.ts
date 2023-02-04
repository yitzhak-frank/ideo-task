import { NgForm } from '@angular/forms';
import { Invoice } from 'src/app/models/interfaces';
import { HttpService } from 'src/app/services/http.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

@Component({
  selector: 'app-add-edit-invoice',
  templateUrl: './add-edit-invoice.component.html',
  styleUrls: ['./add-edit-invoice.component.scss']
})
export class AddEditInvoiceComponent implements OnInit {
  @ViewChild('formCtrl') formCtrl: NgForm = null as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { invoice: Invoice, isEditFlag: boolean },
    private http: HttpService
  ) { }

  ngOnInit(): void { }

  submit() {
    const { formCtrl: { value }, data: { isEditFlag, invoice = <Invoice>{}}} = this;
    Object.entries(value).forEach(([key, val]) =>
      (invoice as any)[key] = Number(val));
    if(isEditFlag)
      this.http.edit(invoice);
    else
      this.http.add(invoice);
  }
}
