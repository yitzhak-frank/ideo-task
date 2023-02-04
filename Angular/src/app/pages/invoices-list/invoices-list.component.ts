import { Invoice } from 'src/app/models/interfaces';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { DeleteInvoiceComponent } from 'src/app/components/delete-invoice/delete-invoice.component';
import { AddEditInvoiceComponent } from '../../components/add-edit-invoice/add-edit-invoice.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  public data: Invoice[] = [];

  constructor(
    private http: HttpService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.data = await this.http.getAll();
  }

  async addAndEdit(invoice?: Invoice) {
    const dialogConf: MatDialogConfig = { data: { invoice, isEditFlag: !!invoice }};
    const editedOrAdded = await this.dialog.open(AddEditInvoiceComponent, dialogConf).afterClosed().toPromise();
    if(editedOrAdded)
      this.loadData();
  }

  async delete(id: number) {
    const dialogConf: MatDialogConfig = { data: { id }};
    const deleted = await this.dialog.open(DeleteInvoiceComponent, dialogConf).afterClosed().toPromise();
    if(deleted)
      this.loadData();
  }
}
