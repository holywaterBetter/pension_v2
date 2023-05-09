import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'historic-site',
  templateUrl: './historic-site.component.html',
  styleUrls: ['../play.component.scss', '../../app.component.scss'],
})
export class HistoricSiteComponent {
  currentIndex: number = 0;
  images: string[] = [
    '/assets/historic-site1.jpg',
    '/assets/historic-site2.jpg',
    '/assets/historic-site3.jpg',
    '/assets/historic-site4.jpg',
  ];
}
