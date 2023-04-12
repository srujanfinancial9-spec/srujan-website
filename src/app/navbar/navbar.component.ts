import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMobileLayout() {
    console.log("show")
    this.show = true;
  }
  hideMobileLayout() {
    console.log("hide")
    this.show = false;
  }
}
