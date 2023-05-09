import { Component } from '@angular/core';

@Component({
  selector: 'facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class FacilitiesComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/pension.jpg',
    '/assets/wood-bench.jpg',
    '/assets/football.jpg',
  ];
}
