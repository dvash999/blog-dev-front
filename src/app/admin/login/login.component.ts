import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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
      console.log(response)
      if (response.status === 200) {
        sessionStorage.setItem('token', response.message);
        this.router.navigate(['admin/dashboard']);
      } else {
        alert('wrong credentials');
        this.form.reset();
      }
    });
  }

  // TEMP!
  createAdmin(): void {
    this.apiService.createAdmin(this.email, this.password).then(token => {});
  }
}
