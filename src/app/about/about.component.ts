import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  element?: HTMLElement

  values: { svgIconPath: string, header: string, body: string }[] = [
    { svgIconPath: '/assets/Img/Svg/smile-face.svg', header: 'Always be honest',  body:'We believe in conducting our business with unwavering honesty and integrity. Transparency and trust are at the core of our client relationships.'},
    { svgIconPath: '/assets/Img/Svg/data-base.svg', header: 'Elevate your financial stature',  body:'All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.'},
    { svgIconPath: '/assets/Img/Svg/thumsup.svg', header: 'Committed to your success',  body:'We understand the importance of trust and confidentiality in our relationships with clients. We uphold strict confidentiality.'},
    { svgIconPath: '/assets/Img/Svg/pen.svg', header: 'Customized for Long-term Value',  body:'We’re all about creating custom solutions that go beyond the quick fix. We believe in long-term value, tailoring our services to fit your unique needs and goals. '},
    { svgIconPath: '/assets/Img/Svg/awards.svg', header: 'Feature two',  body:'All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.'},
    { svgIconPath: '/assets/Img/Svg/sheild.svg', header: 'Client Confidentiality ',  body:'Your trust means the world to us. We treat your personal and financial information with the utmost care, ensuring complete confidentiality.'}
  ];

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
    this.element.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' })
  }

}
