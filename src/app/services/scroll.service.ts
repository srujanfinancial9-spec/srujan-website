import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  element?: HTMLElement

  constructor() { }


  JumpTo(section: any, block:any) {
    this.element = document.getElementById(section) as HTMLElement;
    this.element.scrollIntoView({ behavior: "smooth" , block:block})
  }
}
