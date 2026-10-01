import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolling = false;
  private dropdownCloseTimer?: ReturnType<typeof setTimeout>;

  publicationsUrl = 'https://docs.google.com/spreadsheets/d/1GP-fTs1kgy_wjX7VU3dIOb_NWiLA2bbXOxQrlPdLe5E/edit?usp=sharing';

  items= [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Process', route: '/process' },
    { name: 'Resources',
      dropdown: true,
      showDropdown: false,
      dropDownItems: [
      { name: 'Blog', route: '/blog', url: '' },
      { name: 'Publications', route: '', url: this.publicationsUrl },
    ]
  },
    { name: 'Contact', route: 'api/contact' },
  ];
  currentPage!: string;
  show = false;
  // the closing animation only makes sense once the menu has been opened; without this it plays on every page load
  menuOpened = false;
  icon = "assets/Img/Svg/hamburger.svg";

  constructor(private elementRef: ElementRef,
    private router: Router) {
    // the Resources dropdown never stays open across pages
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeAllDropdowns();
      }
    });
  }
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
      this.menuOpened = true;
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
  openDropdown(item: any) {
    if (!item.dropdown) {
      return;
    }
    clearTimeout(this.dropdownCloseTimer);
    item.showDropdown = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeDropdown(item: any) {
    clearTimeout(this.dropdownCloseTimer);
    if (item.showDropdown) {
      item.showDropdown = false;
    }
  }

  // short delay so the pointer can travel from the label down to the menu without it closing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeDropdownSoon(item: any) {
    if (!item.dropdown) {
      return;
    }
    clearTimeout(this.dropdownCloseTimer);
    this.dropdownCloseTimer = setTimeout(() => this.closeDropdown(item), 200);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleDropdown(item: any) {
    if (item.showDropdown) {
      this.closeDropdown(item);
    } else {
      this.openDropdown(item);
    }
  }

  // with a mouse the menu is already open from hovering, so a click keeps it open; on touch a tap toggles it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDropdownClick(item: any) {
    if (window.matchMedia('(hover: hover)').matches) {
      this.openDropdown(item);
    } else {
      this.toggleDropdown(item);
    }
  }

  closeAllDropdowns() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.items.forEach((item: any) => {
      if (item.dropdown) {
        this.closeDropdown(item);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const dropdown = this.elementRef.nativeElement.querySelector('.dropdownMenu')?.parentElement;
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.closeAllDropdowns();
    }
  }

}
