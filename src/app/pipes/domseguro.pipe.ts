import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): any {
    console.log(value);
    if (!value) {
      return `assets/img/noimage.png`;
    }

    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
