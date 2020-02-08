import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'transformImg'
})
export class TransformImgPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(img: any, ...args: any[]): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + img);
  }
}
