import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    { src: './assets/home/20.jpg', alt: 'Green Buildings', title: 'Green Buildings', description: 'Discover the art of green building with our innovative designs that seamlessly blend aesthetics and environmental responsibility.' },
    { src: './assets/home/16.jpg', alt: 'Solar Powered', title: 'Solar Powered, Naturally Ventilated Building', description: 'Step into a world of natural ventilation, where our buildings breathe with nature, promoting well-being and reducing our carbon footprint.' },
    { src: './assets/home/21.jpg', alt: 'Sustainable Planning', title: 'Sustainable Plannings', description: 'At the forefront of sustainable design, we strive to redefine the possibilities of architecture, creating spaces that inspire and protect our planet.' },
  ];

  private xDown: number | null = null;
  private yDown: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {}

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    const firstTouch = event.touches[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  private isSwiping: boolean = false;

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (this.isSwiping) return; // Prevent frequent triggering

    this.isSwiping = true;
    setTimeout(() => this.isSwiping = false, 1000); // Debounce delay (adjust as needed)

    if (!this.xDown || !this.yDown) return;

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.el.nativeElement.querySelector('.carousel-control-next').click();
      } else {
        this.el.nativeElement.querySelector('.carousel-control-prev').click();
      }
    }
    this.xDown = null;
    this.yDown = null;
  }

  handleSlideEvent(event: any): void {
    console.log('Slide event triggered:', event);
  }

}
