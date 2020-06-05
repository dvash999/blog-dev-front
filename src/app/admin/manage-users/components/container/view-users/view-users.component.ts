import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../../api/manage-users.service';
import { NotificationsService } from '../../../../../blog/features/notifications/notifications.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users;
  columnTitles = ['ID', 'Name', 'Email'];

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
    this.manageUsersService.getAllUsers().then(users => (this.users = users));
  }

  async deleteUser(id) {
    await ViewUsersComponent.approveAction();

    this.manageUsersService.deleteUser(id).then(res => {
      if (!res.message) return;

      this.users = res.message;
    });
  }
}
