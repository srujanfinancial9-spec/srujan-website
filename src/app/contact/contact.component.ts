import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;
  selectedItem!: string;

  @ViewChild('myForm') form!: NgForm;
  element?: HTMLElement

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, metaData: MetaDataService, private fb: FormBuilder, private scroll:ScrollService ) {
    metaData.setMetaData(
      'Reach out for expert financial guidance',
      'Contact Deepali Sen, a qualified personal finance professional, to receive expert guidance and support for all your investment planning needs. '
    )

  }

  items = [
    'Goal based Investment Planning',
    'Retirement Planning',
    'Comprehensive Life Planning'
  ]

  ngOnInit(): void {

    this.myForm = this.fb.group({
      mySelect: [null]
    });

    this.activatedRoute.fragment.subscribe(
      res => {
        this.JumpTo(res);
      }
    )
  }

  onItemSelected(event: any): void {
    this.selectedItem = event.target.value;
  }


  JumpTo(section: any) {
    this.element = document.getElementById(section) as HTMLElement;
    this.element.scrollIntoView({ behavior: "smooth" })
  }


}
