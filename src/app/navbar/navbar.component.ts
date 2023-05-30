import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: { name: string, route: string }[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Process', route: '/process' },
    { name: 'Blog', route: '/blog' },
  ];
  selectedItemIndex!: number;
  currentPage!: string;
  show = false;
  icon = "assets/Img/Svg/hamburger.svg";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

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

  selectItem(index: number) {
    this.selectedItemIndex = index;
  }
}
