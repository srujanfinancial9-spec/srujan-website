import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { MetaDataService } from '../services/meta-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  element?: HTMLElement


  teams: {name: string, desc: string, profile: string, post: string}[] = [
      {name: 'Deepali Sen',desc: 'With over 20 years of experience, I specialize in providing personalized guidance to help my clients reach their financial objectives and regularly review their portfolios to ensure they stay on track.', profile:'assets/Img/webp/DSC_1050 1.webp', post:'Founder, QPFP®'},
      {name: 'Archna Kapoor',desc: 'Compliance with regulatory matters is a vital aspect of our firm’s operations. I take care all critical tasks that ensure that we operate in a transparent, ethical, and compliant manner.', profile:'assets/Img/webp/Archna_kapoor.webp', post:'Compliance Officer'},
      {name: 'Aaryan Sen',desc: 'I take care of all back office related matters, including handling operational queries from our clients, ensuring brokerage compliance, and managing interactions with the CA for all tax-related matters.', profile:'assets/Img/webp/Aryan_sen.webp', post:'Back-office'}
  ]

  values: { svgIconPath: string, header: string, body: string }[] = [
    { svgIconPath: '/assets/Img/Svg/smile-face.svg', header: 'Always be honest', body: 'At the core, we’re a firm believers in conducting our business with unwavering honesty and integrity. Transparency and trust are at the core of our client relationships.' },
    { svgIconPath: '/assets/Img/Svg/data-base.svg', header: 'Elevate your financial stature', body: 'Picture this: a future where your financial goals aren’t just aspirations but tangible achievements. That’s what we strive for.' },
    { svgIconPath: '/assets/Img/Svg/thumsup.svg', header: 'Devoted to Your Success', body: 'Your success is our top priority, and we’re committed to going above and beyond to help you achieve your goals. ' },
    { svgIconPath: '/assets/Img/Svg/pen.svg', header: 'Empowering through Education', body: 'We firmly believe in empowering our clients with financial knowledge and education so they can make informed decisions and feel in control of your finances.' },
    { svgIconPath: '/assets/Img/Svg/awards.svg', header: 'Tailored for Long-term Value', body: "We don't settle for quick fixes. Our focus is on creating customized solutions that deliver long-term value." },
    { svgIconPath: '/assets/Img/Svg/sheild.svg', header: 'Safeguard Client Confidentiality ', body: 'Your trust means the world to us. We treat your personal and financial information with the utmost care, ensuring complete confidentiality.' }
  ];

  constructor(private route: ActivatedRoute,
    private metaData: MetaDataService,
    private scroll:ScrollService) {
    metaData.setMetaData(
      'About Deepali Sen - Your Qualified personal finance professional helping you plan for a secure tomorrow',
      'Meta Description: Deepali Sen is a dedicated personal finance professional committed to helping you plan for a stress-free tomorrow. Get expert guidance on budgeting, debt management, and future investments. Start planning for a secure financial future with Deepali today.'
    )

    this.scroll.initializeScroll();
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(
      res => {
        this.scroll.JumpTo(res,"center");
      }
    )
  }
}
