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
  @Input() type: 'news' | 'deep-dive';
  @Input() content: string;

  @Output() submitForm = new EventEmitter<Post>();
  @Output() lineCounter = new EventEmitter<number>();

  ngOnInit() {
    this.post = this.fb.group({
      title:    this.title,
      author:   this.author,
      type:     this.type,
      content:  this. content
    });
  }

  onSubmit() {
    this.submitForm.emit(this.post.value);
  }

  resetForm(e) {
    e.preventDefault();
    this.post.reset();
    this.lineCounter.emit(0);
  }

  countLines(e) {
    this.lineCounter.emit(e.target.value.length);
  }

}
