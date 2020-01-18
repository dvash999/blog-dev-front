import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseHandlerService } from '../../shared/services/response-handler.service';
import { NotificationsService } from '../../blog/features/notifications/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private notify: NotificationsService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(e): void {
    e.preventDefault();
    if (this.form.invalid) return;

    this.apiService.login(this.email, this.password).then(response => {
      if (response.message === 'success') {
        sessionStorage.setItem('token', response.payload);
        this.router.navigate(['admin/dashboard']);
      }
      this.form.reset();
    });
  }

  // TEMP!
  // createAdmin(): void {
  //   this.apiService.createAdmin(this.email, this.password).then(token => {});
  // }
}
