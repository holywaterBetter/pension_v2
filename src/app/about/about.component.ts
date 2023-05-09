import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.scss'],
})
export class AboutComponent {
  @ViewChild('TopImage') myImg: ElementRef<HTMLImageElement>;
  @ViewChild('Header') myText: ElementRef<HTMLDivElement>;

  updateTextPosition() {
    const img = this.myImg.nativeElement;
    const height =
      window.screen.availHeight < img.height
        ? window.screen.availHeight
        : img.height;
    this.myText.nativeElement.style.top = `calc(${height / 2}px)`;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateTextPosition();
  }
}
