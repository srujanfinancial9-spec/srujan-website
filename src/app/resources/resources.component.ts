import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  element?: HTMLElement
  @Input() blog: unknown;

  constructor(private activatedRoute: ActivatedRoute,
    private metaData: MetaDataService,
    private router: Router) {
    metaData.setMetaData(
      'Financial Resources - Empowering You with Knowledge and Tools',
      'Access a wealth of financial resources and tools curated by Deepali Sen to empower you on your journey towards financial success. Explore articles, guides, calculators, and recommended readings to enhance your financial literacy and make informed decisions.'
    )
  }

  onCardClick(id:number) {
    this.router.navigate(['/blog-detail', id]);
  }


}
