import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  element?: HTMLElement

  rotate1 = false;
  rotate2 = false;
  rotate3 = false;
  rotate4 = false;
  rotate5 = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.JumpTo(res);
      }
    )
  }

  toggle(n: number) {
    switch (n) {
      case 1: if (this.rotate1 == false) {
        this.rotate1 = true
      } else {
        this.rotate1 = false
      }
        break;
      case 2: if (this.rotate2 == false) {
        this.rotate2 = true
      } else {
        this.rotate2 = false
      }
        break;
      case 3: if (this.rotate3 == false) {
        this.rotate3 = true
      } else {
        this.rotate3 = false
      }
        break;
      case 4: if (this.rotate4 == false) {
        this.rotate4 = true
      } else {
        this.rotate4 = false
      }
        break;
      case 5: if (this.rotate5 == false) {
        this.rotate5 = true
      } else {
        this.rotate5 = false
      }
        break;
    }
  }

  JumpTo(section: any) {
    setTimeout(() => {
      this.element = document.getElementById(section) as HTMLElement;
      this.element.scrollIntoView({ behavior: "smooth" })
    }, 500);
  }
}
