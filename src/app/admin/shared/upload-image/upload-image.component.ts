import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
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
  @ViewChild('file', { static: false }) fileRef: ElementRef;
  @Input('cleanInput') set cleanInput(value: boolean) {
    if (!value) {
      return;
    }
    this.removeFile();
  }
  @Output() approveImg = new EventEmitter<File | boolean>();
  file: File;

  constructor() {}

  ngOnInit() {}

  onFileSelect(file) {
    if (!file) return;
    this.file = file.target.files[0];

    if (this.verifyFileSize() && this.verifyFileType()) {
      this.approveImg.emit(this.file);
    } else {
      this.removeFile();
      this.approveImg.emit(false);
    }
  }

  removeFile() {
    this.file = null;
    this.fileRef.nativeElement.value = '';
  }

  verifyFileSize() {
    const fSize = Math.round(this.file.size / 1024 / 1024);
    return fSize < 3;
  }

  verifyFileType() {
    return this.file.type === 'image/jpeg';
  }
}
