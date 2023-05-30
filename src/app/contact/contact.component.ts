import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
    this.element = document.getElementById(section) as HTMLElement;
    this.element.scrollIntoView({ behavior: "smooth" })
  }

}
