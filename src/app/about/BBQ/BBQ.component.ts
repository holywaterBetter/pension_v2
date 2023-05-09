import { Component } from '@angular/core';

@Component({
  selector: 'BBQ',
  templateUrl: './BBQ.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class BBQComponent {
  constructor() {}

  currentIndex: number = 0;
  images: string[] = [
    '/assets/dining-place.jpg',
    '/assets/fire.jpg',
    '/assets/fire2.jpg',
  ];
}
