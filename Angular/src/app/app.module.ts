import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SorterDirective } from './directives/sorter.directive';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './services/interceptor.service';
import { InvoiceItemComponent } from './components/invoice-item/invoice-item.component';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';
import { DeleteInvoiceComponent } from './components/delete-invoice/delete-invoice.component';
import { AddEditInvoiceComponent } from './components/add-edit-invoice/add-edit-invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    InvoiceItemComponent,
    AddEditInvoiceComponent,
    DeleteInvoiceComponent,
    SorterDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
