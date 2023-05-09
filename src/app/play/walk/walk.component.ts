import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'walk',
  templateUrl: './walk.component.html',
  styleUrls: ['../play.component.scss', '../../app.component.scss'],
})
export class WalkComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/walk1.jpg',
    '/assets/walk2.jpg',
    '/assets/walk3.jpg',
    '/assets/walk4.jpg',
  ];
}
