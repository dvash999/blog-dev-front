import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ManageUsersService } from '../../admin/manage-users/api/manage-users.service';
import { User } from '../../admin/manage-users/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<Promise<User[]>> {

  constructor(private manageUsers: ManageUsersService) {}

  resolve(): Promise<User[]> {
    return this.manageUsers.getAllUsers();
  }
}
