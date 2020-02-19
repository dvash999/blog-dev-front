import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../../../../../blog/features/notifications/notifications.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder, private notify: NotificationsService) {}

  @Input() title: string;
  @Input() author: string;
  @Input() type: 'news' | 'deep-dive';
  @Input() content = '';
  @Input() img: File;

  @Output() submitForm = new EventEmitter<any>();

  imgPath: any;
  isCleaned = false;

  ngOnInit() {
    this.post = this.fb.group({
      title: [this.title, Validators.required],
      author: [this.author, Validators.required],
      type: [this.type, Validators.required],
      content: [this.content, Validators.required],
      img: [this.img, Validators.required]
    });
  }

  get characterAmount() {
    return this.post.get('content').value
      ? this.post.get('content').value.length
      : 0;
  }

  watchImage(img) {
    const reader = new FileReader();
    this.imgPath = img;
    reader.readAsDataURL(img);
    reader.onload = event => {
      this.imgPath = reader.result;
    };

    this.img = img;
    this.isCleaned = false;
  }

  onSubmit() {
    this.post.value.img = this.img;
    this.submitForm.emit(this.post.value);
  }

  deleteImg() {
    this.img = null;
    this.imgPath = '';
    this.isCleaned = true;
  }

  imgError() {
    this.notify.failed(
      'Images must be a PNG or JPG type, and less than 5MB in size'
    );
  }

  resetForm(e) {
    e.preventDefault();
    this.post.reset();
    this.isCleaned = true;
  }
}
