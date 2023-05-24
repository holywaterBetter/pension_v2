import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss'],
})
export class HomeReviewsComponent implements AfterViewChecked {
  @ViewChild('ImageContainer') imageContainer: ElementRef;
  ReviewList = ReviewList;

  ngAfterViewChecked() {
    // this.imageContainer.nativeElement.addEventListener(
    //   'scroll',
    //   this.handleScroll
    // );
    // this.imageContainer.nativeElement.addEventListener(
    //   'touchend',
    //   this.handleScroll
    // );
  }

  hello(event?: Event) {
    console.warn('hello', event);
    // console.warn('event', event);
    // const scrollLeft = (event.target as HTMLElement).scrollLeft;
    // const containerWidth = this.imageContainer.nativeElement.scrollWidth;
    // console.warn('containerWidth', containerWidth, containerWidth / 5);
    // console.warn('scrollLeft', scrollLeft);
    // console.warn(Math.round(scrollLeft / (containerWidth / 5)));
  }

  handleScroll = (event: Event) => {
    console.warn('event', event);
    const scrollLeft = (event.target as HTMLElement).scrollLeft;
    const containerWidth = this.imageContainer.nativeElement.scrollWidth;
    console.warn('containerWidth', containerWidth, containerWidth / 5);
    console.warn('scrollLeft', scrollLeft);
    console.warn(Math.round(scrollLeft / (containerWidth / 5)));
  };
}

const ReviewList = [
  {
    selected: true,
    href: 'https://blog.naver.com/sam_box/222827110393',
    img: 'assets/home-review/sam_box_preview.jpg',
    date: '2022.07.24 방문',
    tag: '#펜션 #평상 #백숙',
    description: '물놀이 하기 최고!',
  },
  {
    selected: false,
    href: 'https://blog.naver.com/vhfpqj327/222791258320',
    img: 'assets/home-review/vhfpqj327_preview.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '완벽했던 하루❤',
  },
  {
    selected: false,
    href: 'https://blog.naver.com/plask79/222819401741',
    img: 'assets/home-review/plask79_preview.jpg',
    date: '2022.07.19 방문',
    tag: '#백숙 #물놀이',
    description: '그냥 풍경만 봐도 피서입니다',
  },
  {
    selected: false,
    href: 'https://blog.naver.com/ppangu0113/222806544272',
    img: 'assets/home-review/ppangu0113_preview.jpg',
    date: '2022.07.10 방문',
    tag: '#백숙 #물놀이',
    description: '엄청 친절하시고 음식 맛도 좋아요',
  },
  {
    selected: false,
    href: 'https://blog.naver.com/yun_0225/222440823005',
    img: 'assets/home-review/yun_0225_preview.jpg',
    date: '2022.06.29 방문',
    tag: '#펜션 #평상 #백숙',
    description: '계곡 진짜 10초 컷',
  },
];
