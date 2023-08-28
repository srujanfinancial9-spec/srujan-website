import { Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolling = false;
  rotationAngle = 180;

  items= [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Process', route: '/process' },
    { name: 'Resources',
      dropdown: true,
      showDropdown: false,
      dropDownItems: [
      { name: 'Blog', route: '/blog' },
      { name: 'Publications', route: 'api/publication' },
    ]
  },
    { name: 'Contact', route: 'api/contact' },
  ];
  currentPage!: string;
  show = false;
  icon = "assets/Img/Svg/hamburger.svg";

  constructor(private route: ActivatedRoute,
    private elementRef: ElementRef,
    private router: Router,
    private renderer: Renderer2) { }
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleDropdown(item: any) {
    item.showDropdown = !item.showDropdown;
    const dropdownIcon = document.getElementById('dropdownIcon');
    const transformValue = `rotate(${this.rotationAngle})`;
    if(this.rotationAngle === 180){
      this.rotationAngle = 0;
      this.renderer.setAttribute(dropdownIcon,'transform', transformValue)
    } else {
      console.log("set value")
      this.rotationAngle = 180;
      this.renderer.setAttribute(dropdownIcon,'transform', transformValue)
    }
  }

}
