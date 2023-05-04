import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;
  icon = "assets/Img/Svg/hamburger.svg";

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.show == false) {
      this.show = true;
      this.icon ="assets/Img/Svg/Close.svg";
    } else {
      this.show = false;
      this.icon = "assets/Img/Svg/hamburger.svg";
    }
  }
  hideMobileLayout() {
    this.show = false;
    this.icon = "assets/Img/Svg/hamburger.svg";
  }
}
