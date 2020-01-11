import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../blog/api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  form: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email:    ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.form.invalid) return;

    this.apiService
      .login(this.email, this.password)
      .then(res => console.log(res));
  }
}
