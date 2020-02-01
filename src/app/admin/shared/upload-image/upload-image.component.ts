import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  @Output() approveImg = new EventEmitter<File | boolean>();
  @ViewChild('file', { static: false }) fileRef: ElementRef;
  file: File;

  constructor() {}

  ngOnInit() {}

  onFileSelect(file) {
    this.file = file.target.files[0];

    if (this.verifyFileSize() && this.verifyFileType()) {
      this.approveImg.emit(this.file);
    } else {
      this.file = null;
      this.fileRef.nativeElement.value = '';
      this.approveImg.emit(false);
    }
  }

  verifyFileSize() {
    const fSize = Math.round(this.file.size / 1024 / 1024);
    return fSize < 3;
  }

  verifyFileType() {
    return this.file.type === 'image/jpeg';
  }
}
