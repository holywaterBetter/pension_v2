import { Component } from '@angular/core';

@Component({
  selector: 'mountain-climbing',
  templateUrl: './mountain-climbing.component.html',
  styleUrls: ['../play.component.scss', '../../app.component.scss'],
})
export class MountainClimbingComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/mountain-climbing1.jpg',
    '/assets/mountain-climbing2.jpg',
    '/assets/mountain-climbing3.jpg',
    '/assets/mountain-climbing4.jpg',
    '/assets/mountain-climbing5.jpg',
  ];
}
