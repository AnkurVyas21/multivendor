// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loaderService/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authorization');

    this.loaderService.show(); // 👉 Show loader before request

    const clonedReq = token
      ? req.clone({ setHeaders: { Authorization: `${token}` } })
      : req;

    return next.handle(clonedReq).pipe(
      finalize(() => {
        this.loaderService.hide(); // 👉 Hide loader after response or error
      })
    );
  }
}
