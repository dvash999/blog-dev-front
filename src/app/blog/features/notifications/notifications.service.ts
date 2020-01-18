import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { NotifierService } from 'angular-notifier';
import { ResponseMessage } from '../../../shared/models/responseMessage';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  readonly notifier: NotifierService;

  constructor(private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  static warning() {
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1fd63b',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete!'
    });
  }

  success(message = 'success'): void {
    this.notifier.notify('success', message);
  }

  failed(message = 'failed'): void {
    this.notifier.notify('error', message);
  }

  serverError(message = 'server error, please try again later'): void {
    this.notifier.notify('error', message);
  }

  info(message = 'info'): void {
    this.notifier.notify('info', message);
  }

  notify({ status, message }: ResponseMessage) {
    if (100 < status && status < 300) this.success(message);
    if (400 < status && status < 500) this.failed(message);
    if (500 < status && status < 600) this.serverError(message);
  }
}
