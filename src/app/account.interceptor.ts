import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let baseURL = "https://dummyapi.io/data/v1/"
    let accountId = "64d45f0af21cca63bc13a2b2"

    const req = request.clone({
      headers: request.headers.set('app-id', accountId),
      //url : baseURL + request.url
    })

    return next.handle(req);
  }
}
