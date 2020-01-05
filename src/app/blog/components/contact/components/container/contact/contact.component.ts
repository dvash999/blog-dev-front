import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {EmailService} from '../../../../../shared/services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  name: string;
  email: string;
  content: string;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('/[a-z]/gi')]],
      email: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit() {}

  errorCheck(field) {
    if (field === 'email' && this.form.get(field).hasError('email')) {
      return 'invalid email';
    }
    if (this.form.get(field).hasError('required')) {
      return `${field} is required`;
    }
  }

  submit(isValid): void {
    if (!isValid) return;
    this.emailService.sendEmail(this.form.value);
  }
}
