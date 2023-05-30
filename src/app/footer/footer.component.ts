import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

}
