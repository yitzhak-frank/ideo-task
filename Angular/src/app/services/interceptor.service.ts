import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  private readonly localApiUrl = 'https://localhost:7182';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!['localhost', '127.0.0.1'].some(path => req.url.includes(path)))
      return next.handle(req);
    const localApiReq = req.clone({ url: `${this.localApiUrl}/${req.url}` });
    return next.handle(localApiReq);
  }
}
