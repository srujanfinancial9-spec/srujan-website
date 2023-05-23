import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  element?: HTMLElement

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.JumpTo(res);
      }
    )
  }

  JumpTo(section: any) {
    setTimeout(() => {
      this.element = document.getElementById(section) as HTMLElement;
      this.element.scrollIntoView({ behavior: "smooth" })
    }, 500);
  }

}
