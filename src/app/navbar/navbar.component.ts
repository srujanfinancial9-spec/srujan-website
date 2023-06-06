import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolling: boolean = false;

  items: { name: string, route: string }[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Process', route: '/process' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' },
  ];
  currentPage!: string;
  show = false;
  icon = "assets/Img/Svg/hamburger.svg";

  constructor(private route: ActivatedRoute, private elementRef: ElementRef, private router: Router) { }
  @HostListener('window:scroll', [])

  ngOnInit(): void {
    this.onScroll()
  }

  onScroll(): void {
    const stickyNavbar = this.elementRef.nativeElement.querySelector('.sticky');
    this.isScrolling = (window.scrollY > 36);
    if (this.isScrolling) {
      stickyNavbar.classList.add('scrolling');
    } else {
      stickyNavbar.classList.remove('scrolling');
    }
  }

  toggle() {
    if (this.show == false) {
      this.show = true;
      this.icon = "assets/Img/Svg/Close.svg";
    } else {
      this.show = false;
      this.icon = "assets/Img/Svg/hamburger.svg";
    }
  }
  hideMobileLayout() {
    this.show = false;
    this.icon = "assets/Img/Svg/hamburger.svg";
  }

  isMenuItemActive(path: string): boolean {
    return this.router.isActive(path, true);
  }

  goToInvestOfficePage() {
    window.open('https://iinvestoffice.com/');
  }
}
