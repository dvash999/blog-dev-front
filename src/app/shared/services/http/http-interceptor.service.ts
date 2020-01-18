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
        if (event instanceof HttpResponse) {
          this.handleFailed(event);
        }
      }),
      catchError(this.handleError)
    );
  }

  handleFailed(event) {
    if (event.body && event.body.status >= 400) {
      this.notificationsService.notify(event.body);
    }
  }

  handleError(error: HttpErrorResponse) {
    this.notificationsService.failed('server error');
    return throwError(error);
  }
}
