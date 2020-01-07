import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationsService } from '../../../blog/features/notifications/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private notificationsService: NotificationsService) {}

  static getHttpHeaders(): any {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Content-Type, X-Auth-Token, Authorization, Origin',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clone = req.clone({
      headers: HttpInterceptorService.getHttpHeaders()
    });

    return next.handle(clone).pipe(
      tap(event => {
        if (event instanceof HttpResponse && event.body) this.notificationsService.success();
      }),
      catchError(this.handleError)
    );
  }

  // handleResponse(event) {
  //   console.log('eve', event)
  //   if (event.body) this.notificationsService.success();
  // }

  handleError(error: HttpErrorResponse) {
    this.notificationsService.error();
    return throwError(error);
  }
}
