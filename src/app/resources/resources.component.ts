import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  element?: HTMLElement

  constructor(private activatedRoute: ActivatedRoute, private metaData: MetaDataService) {
    metaData.setMetaData(
      'Financial Resources - Empowering You with Knowledge and Tools',
      'Access a wealth of financial resources and tools curated by Deepali Sen to empower you on your journey towards financial success. Explore articles, guides, calculators, and recommended readings to enhance your financial literacy and make informed decisions.'
    )
  }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.JumpTo(res);
      }
    )
  }

  JumpTo(section: any) {
    this.element = document.getElementById(section) as HTMLElement;
    this.element.scrollIntoView({ behavior: "smooth" })
  }

}
