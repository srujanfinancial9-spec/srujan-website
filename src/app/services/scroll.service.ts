import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private viewportScroller: ViewportScroller) { }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
    }
  }
}
