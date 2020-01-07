import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../../../shared/services/email/email.service';

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

  isEmailSent: boolean;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit() {}

  errorCheck(field) {
    if (this.form.get(field).dirty && this.form.get(field).errors) return `Insert valid ${field}`;
  }

  submit(): void {
    if (this.form.invalid) return alert('Please check all fields');
    this.emailService.sendEmail(this.form.value).then(response => {
      if (response.message === 'success') {
        this.form.reset();
        this.isEmailSent = true;
      }
    });
  }
}
