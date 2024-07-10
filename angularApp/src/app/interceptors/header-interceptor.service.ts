import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('from httpInterceptor', req);

    // const myRequest = req.clone({
    //   setHeaders: {
    //     'x-rapidapi-key': 'deff185329msh5cffbdf8801f3f0p1b74adjsn3bb2cc6775e6',

    //     'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
    //   },
    // });

    //return next.handle(myRequest);
    return next.handle(req);

  }
}
