import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../../../models/Post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Input() title: string;
  @Input() author: string;
  @Input() content: string;

  @Output() submitForm = new EventEmitter<Post>();

  ngOnInit() {
    this.post = this.fb.group({
      title:    this.title,
      author:   this.author,
      content:  this. content
    });
  }

  onSubmit() {
    this.submitForm.emit(this.post.value);
  }

  resetForm() {
    this.post.reset();
  }

}
