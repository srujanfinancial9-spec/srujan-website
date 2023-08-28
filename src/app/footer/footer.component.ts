import { Component } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router, private scrollService: ScrollService) {
    this.scrollService.initializeScroll();
  }
  scrollToSection(sectionId: string) {
    this.scrollService.JumpTo(sectionId);
  }

}
