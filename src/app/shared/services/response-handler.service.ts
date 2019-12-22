import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService {

  constructor() { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return new ErrorEvent('there was an error');
  }
}
