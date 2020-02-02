import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../models/Post.model';
import { NotificationsService } from '../../../../../blog/features/notifications/notifications.service';
import { PostAndImg } from '../../../models/PostAndImg.model';

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
  @Input() content: string;
  @Input() img: File;

  @Output() submitForm = new EventEmitter<any>();
  @Output() lineCounter = new EventEmitter<number>();

  ngOnInit() {
    this.post = this.fb.group({
      title: [this.title, Validators.required],
      author: [this.author, Validators.required],
      type: [this.type, Validators.required],
      content: [this.content, Validators.required],
      img: this.img
    });
  }

  countLines(e) {
    this.lineCounter.emit(e.target.value.length);
  }

  addImgToForm(img) {
    if (!img) {
      this.notify.failed(
        'Images must be a PNG or JPG type, and less than 5MB in size'
      );
    }
    this.img = img;
  }

  onSubmit() {
    const formData = new FormData();

    // formData.append('img', this.img);
    formData.append('post', this.post.value);

    this.submitForm.emit(formData);
  }

  resetForm(e) {
    e.preventDefault();
    this.post.reset();
    this.lineCounter.emit(0);
  }
}
