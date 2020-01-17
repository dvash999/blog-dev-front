import { Injectable } from '@angular/core';
import { ResponseMessage } from '../models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService {
  constructor() {}

  handleResponse(response: ResponseMessage) {
    if (response.status === 200) {
      // notify success
      return response.message;
    }

    // notify error
  }
}
