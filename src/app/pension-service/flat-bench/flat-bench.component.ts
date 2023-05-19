import { Component } from '@angular/core';

@Component({
  selector: 'flat-bench',
  templateUrl: './flat-bench.component.html',
  styleUrls: ['../app.component.scss'],
})
export class FlatBenchComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/flat-bench1.jpg',
    '/assets/flat-bench2.jpg',
    '/assets/flat-bench3.jpg',
    '/assets/flat-bench4.jpg',
  ];
}
