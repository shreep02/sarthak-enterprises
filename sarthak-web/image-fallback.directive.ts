import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true,
})
export class ImageFallbackDirective {
  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError() {
    const img = this.el.nativeElement;
    img.onerror = null; // Prevent infinite loops
    const originalSrc = img.getAttribute('src');
    if (
      originalSrc &&
      !originalSrc.startsWith('/') &&
      !originalSrc.startsWith('http')
    ) {
      img.src = '/' + originalSrc;
    }
  }
}
