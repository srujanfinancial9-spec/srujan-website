import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  actionImgPath = 'assets/Images/Svg/up-arrow.svg';
  showDivider = true;
  constructor() { }

  ngOnInit(): void {
  }

  imageChange() {
    if (this.actionImgPath == "assets/Img/Svg/up-arrow.svg" && this.showDivider == true) {
      this.actionImgPath = 'assets/Img/Svg/down-arrow.svg'
      this.showDivider = false;
    } else {
      this.actionImgPath = 'assets/Img/Svg/up-arrow.svg'
      this.showDivider = true;
    }
  }
}
