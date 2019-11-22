import { Component, OnInit } from '@angular/core';
import {ManageUsersModule} from '../../../module/manage-users.module';
import {ManageUsersService} from '../../../api/manage-users.service';
import {Observable} from 'rxjs';
import {User} from '../../../models/User.model';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  // users$: Observable<User[]>;
  users$: Observable<User[]>;


  constructor(private manageUsersService: ManageUsersService) { }

  ngOnInit() {
    this.users$ = this.manageUsersService.getAllusers();
  }

}
