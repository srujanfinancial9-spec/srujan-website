import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
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
      'Blog | Personal Finance Articles | Srujan Financial Services',
      'Articles from Srujan Financial Services on money management, retirement, gold and common investment mistakes, written to help you make informed decisions.'
    )
  }

  onCardClick(id:number) {
    this.router.navigate(['/blog-detail', id]);
  }


}
