import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../../../api/manage-users.service';
import {Observable} from 'rxjs';
import {User} from '../../../models/User.model';
import {NotificationsService} from '../../../../../shared/notifications/notifications.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users$: User[];
  columnTitles = ['ID', 'Name', 'Email', 'Action'];

  constructor(private manageUsersService: ManageUsersService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.manageUsersService.getAllusers().subscribe(users => this.users$ = users);
  }

  deleteUser(id) {
    NotificationsService.warning().then(response => {
      console.log(response);
      if (response.dismiss) return;

      this.manageUsersService.deleteUser(id).then(() => {
        this.users$ = this.users$.filter(user => user.id !== id);
      });
    }

  );


  }

}
