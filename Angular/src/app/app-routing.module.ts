import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './pages/invoices-list/invoices-list.component';

const routes: Routes = [
  { path: 'list', component: InvoicesListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
