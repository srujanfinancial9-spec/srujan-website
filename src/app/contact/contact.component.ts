import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';
import { ScrollService } from '../services/scroll.service';
import { TokenObject } from '../models/token.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myForm!: FormGroup;
  selectedItem!: string;
  tokenUrl = "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-ripez/auth/providers/anon-user/login";
  mongodbUrl = "https://us-east-1.aws.data.mongodb-api.com/app/application-0-ripez/endpoint/addUser";
  loading = false;
  submitButtonText = 'Send'

  @ViewChild('myForm') form!: NgForm;
  element?: HTMLElement

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    metaData: MetaDataService,
    private fb: FormBuilder,
    private scroll: ScrollService) {

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
      name: ['', Validators.required],
      selectedOption: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onItemSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedItem = target.value;
  }


  postForm(token: string, body:unknown) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    this.http.post(this.mongodbUrl, body, { headers }).subscribe(
      (response) => {
        console.log('Data sent successfully!', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );

  }

  onSubmit() {
    this.loading = true;
    this.submitButtonText = 'Your message is sent!';

    const formData = this.myForm.value;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post<TokenObject>(this.tokenUrl, { headers }).subscribe(
      (response) : void => {
        this.postForm(response.access_token, formData)
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );

    setTimeout(() => {
      this.loading = false;
      this.myForm.reset();
      this.submitButtonText = 'Your message is sent!';
    }, 1000);
  }
}
