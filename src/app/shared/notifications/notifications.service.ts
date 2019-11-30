import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  static warning() {
  return Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#1fd63b',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete!'
  });
  }
}

