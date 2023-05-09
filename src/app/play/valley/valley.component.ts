import { Component } from '@angular/core';

@Component({
  selector: 'valley',
  templateUrl: './valley.component.html',
  styleUrls: ['../play.component.scss', '../../app.component.scss'],
})
export class ValleyComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/valley1.jpg',
    '/assets/valley2.jpg',
    '/assets/valley3.jpg',
    '/assets/valley4.jpg',
    '/assets/valley5.jpg',
    '/assets/valley6.jpg',
    '/assets/valley7.jpg',
  ];
}
