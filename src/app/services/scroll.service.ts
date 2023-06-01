import { ViewportScroller } from '@angular/common';
import {  Injectable, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  element?: HTMLElement

  constructor(private router: Router) {
   }


  JumpTo(sectionId: any, block: any) {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = section.offsetTop - (window.innerHeight - section.offsetHeight) / 2;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  initializeScroll(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = event.urlAfterRedirects.split('#')[1];
        console.log(fragment)
        if (fragment) {
          setTimeout(() => {
            this.JumpTo(fragment,'');
          }, 0);
        }
      }
    });
  }

}
