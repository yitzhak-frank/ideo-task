import { Invoice } from '../models/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly URL = 'api/main';

  constructor(private http: HttpClient) { }

  public getAll(): Promise<Invoice[]> {
    return this.http.get(`${this.URL}/GetAll`).toPromise() as Promise<Invoice[]>;
  }

  public getById(id: number): Promise<Invoice> {
    return this.http.get(`${this.URL}/GetById/${id}`).toPromise() as Promise<Invoice>;
  }

  public add(invoice: Invoice): Promise<boolean> {
    return this.http.post(`${this.URL}/Add`, invoice).toPromise() as Promise<boolean>;
  }

  public edit(invoice: Invoice): Promise<boolean> {
    return this.http.put(`${this.URL}/Edit`, invoice).toPromise() as Promise<boolean>;
  }

  public delete(id: number): Promise<boolean> {
    return this.http.delete(`${this.URL}/Delete/${id}`).toPromise() as Promise<boolean>
  }
}
