import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  rotate = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.rotate == false) {
      this.rotate = true;
    } else {
      this.rotate = false;
    }
  }
}
