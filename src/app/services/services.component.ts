import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaDataService } from './meta-data.service';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private metaData: MetaDataService,
    private scroll:ScrollService) {
    metaData.setMetaData(
      'Personalized Financial Guidance for a Stress-Free Life | Srujan Financial',
      'We provide goal-based investment planning, comprehensive life planning, and retirement planning to help you live a stress-free life without financial worries. '
    )

    this.scroll.initializeScroll();
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.scroll.JumpTo(res,'end');
      }
    )
  }



}
