import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('clientWrap') clientWrap!: ElementRef;

  constructor(private elRef: ElementRef) { }
  slide(direction: string) {
    console.log("direction:-", direction)
    console.log("container:-", this.clientWrap.nativeElement)
    // let slideVar = setInterval(() => {
    //   if (direction == 'left') {
    //     this.container.scrollLeft -= 30;
    //   } else {
    //     this.container.scrollLeft += 30;
    //   }
    //   this.scrollCompleted += 10;
    //   if (this.scrollCompleted >= 100) {
    //     window.clearInterval(slideVar);
    //   }
    // }, 50);
  }
  ngOnInit(): void {
  }

  hello(){
    console.log("hello")
  }
}
