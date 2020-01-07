import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private notifierService: NotifierService) {}

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

  success(message = 'success', type = 'success') {
    console.log('success')
    this.notifierService.notify(type, message);
  }

  error(message = 'error', type = 'error', ) {
    console.log('error')
    this.notifierService.notify(type, message);
  }

  info(message = 'info', type = 'info') {
    this.notifierService.notify(type, message);
  }
}
