import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
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
