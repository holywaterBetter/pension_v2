import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'home-review',
  templateUrl: './home-review.component.html',
  styleUrls: ['./home-review.component.scss'],
})
export class HomeReviewComponent {
  @ViewChild('reviews', { static: true }) reviews: ElementRef<HTMLElement>;

  ReviewList = ReviewList;
  disabledLeftButton: boolean;
  disabledRightButton: boolean;

  constructor() {
    this._setDisabledButton();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.move(0);
  }

  move(direction: number) {
    this._moveTurn += direction;
    this.reviews.nativeElement.style.transform = `translate3d( calc(( ${this.reviewBoxWidth} + 2rem) * ${this._moveTurn}), 0px, 0px)`;
    this._setDisabledButton();
  }
  private _moveTurn: number = 0;

  get reviewBoxWidth(): string {
    if (document.documentElement.scrollWidth <= 640) {
      return `calc(${this.reviews.nativeElement.clientWidth}px - 2rem)`;
    } else if (document.documentElement.scrollWidth <= 1023) {
      return `calc((${this.reviews.nativeElement.clientWidth}px - 4rem) / 2)`;
    } else {
      return `calc((${this.reviews.nativeElement.clientWidth}px - 6rem) / 3)`;
    }
  }

  private _setDisabledButton() {
    this.disabledLeftButton = this._moveTurn === 0;
    if (screen.width <= 640) {
      this.disabledRightButton = this._moveTurn === -4;
    } else if (screen.width <= 1023) {
      this.disabledRightButton = this._moveTurn === -3;
    } else {
      this.disabledRightButton = this._moveTurn === -2;
    }
  }
}

const ReviewList = [
  {
    hover: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: '/assets/vhfpqj327_preview.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루❤',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/plask79/222819401741',
    img: '/assets/plask79_preview.jpg',
    date: '2022.07.19 방문',
    tag: '#백숙 #물놀이',
    description: '그냥 풍경만 봐도 피서입니다',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/ppangu0113/222806544272',
    img: '/assets/ppangu0113_preview.jpg',
    date: '2022.07.10 방문',
    tag: '#백숙 #물놀이',
    description: '엄청 친절하시고 음식 맛도 좋아요',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/sam_box/222827110393',
    img: '/assets/sam_box_preview.jpg',
    date: '2022.07.24 방문',
    tag: '#펜션 #평상 #백숙',
    description: '물놀이 하기 최고!',
  },
  {
    hover: false,
    href: 'https://blog.naver.com/yun_0225/222440823005',
    img: '/assets/yun_0225_preview.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '계곡 진짜 10초 컷',
  },
];
