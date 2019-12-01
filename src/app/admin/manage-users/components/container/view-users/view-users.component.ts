import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../../api/manage-users.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/User.model';
import { NotificationsService } from '../../../../../shared/notifications/notifications.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users;
  columnTitles = ['ID', 'Name', 'Email', 'Manage'];

  static ObjToArrayPipe(posts) {
    return posts.map(({ id, name, email }) => [id, name, email]);
  }

  static approveAction() {
    return NotificationsService.warning().then(response => {
      if (response.dismiss) return;
    });
  }

  constructor(private manageUsersService: ManageUsersService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.manageUsersService
      .getAllusers()
      .then(users => (this.users = ViewUsersComponent.ObjToArrayPipe(users)));
  }

  async deleteUser(id) {
    await ViewUsersComponent.approveAction();

    this.manageUsersService.deleteUser(id).then(res => {
      if (!res.message) return;

      this.users = ViewUsersComponent.ObjToArrayPipe(res.message);
    });
  }
}
