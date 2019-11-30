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

  constructor(private manageUsersService: ManageUsersService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.manageUsersService
      .getAllusers()
      .subscribe(users => {
        this.users = users.map(({id, name, email}) => [id, name, email]);
        console.log(this.users)
      });

  }

  deleteUser(id) {
    NotificationsService.warning().then(response => {
      if (response.dismiss) return false;

      this.manageUsersService.deleteUser(id).then(res => {
        if (!res) return;
      
        this.users = this.users.filter(user => user.id !== id);
      });
    });
  }
}
