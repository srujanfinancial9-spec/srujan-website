import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MetaDataService } from './meta-data.service';
import { ScrollService } from './scroll.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private metaData: MetaDataService,
    private scroll:ScrollService) {
    metaData.setMetaData(
      'Services | Goal-Based & Retirement Planning | Srujan Financial',
      'Goal-based investment planning, retirement planning and comprehensive life planning from Srujan Financial Services, a mutual fund distributor in Mumbai.'
    )

    this.scroll.initializeScroll();
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.scroll.JumpTo(res || '');
      }
    )
  }



}
