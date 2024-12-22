import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgOptimizedImage, RouterModule],
})
export class HeaderComponent {
  @ViewChild('navbarSupportedContent') navbarCollapse!: ElementRef;
  collapseNavbar() {
    this.navbarCollapse.nativeElement.classList.remove('show');
  }
}
