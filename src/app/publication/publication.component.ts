import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaDataService } from '../services/meta-data.service';
import { MongodbTokenServiceService } from '../services/mongodb-token-service.service';
import { PulicationData } from '../models/publication';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  element?: HTMLElement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokenObject!: any;
  publicationArray: PulicationData[]=[];
  mongodbUrl = 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-ripez/endpoint/getPublicationsData';
  tokenUrl = "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-ripez/auth/providers/anon-user/login";


  constructor(private activatedRoute: ActivatedRoute,
    private metaData: MetaDataService,
    private router: Router,
    private tokenService: MongodbTokenServiceService,
    private http: HttpClient) {
    metaData.setMetaData(
      'Financial Resources - Empowering You with Knowledge and Tools',
      'Access a wealth of financial resources and tools curated by Deepali Sen to empower you on your journey towards financial success. Explore articles, guides, calculators, and recommended readings to enhance your financial literacy and make informed decisions.'
    )
  }

  ngOnInit(): void {
    const cachedData = localStorage.getItem('publicationData');
    if (cachedData) {
      this.publicationArray = JSON.parse(cachedData);
    } else {
      this.getToken()
    }
  }


  onCardClick(id:number) {
    this.router.navigate(['/blog-detail', id]);
  }

  getPublication(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    this.http.get(this.mongodbUrl, { headers }).subscribe(
      (response) => {
        this.publicationArray = response as PulicationData[]
        localStorage.setItem('publicationData', JSON.stringify(response));
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );

  }

  // Generate Fake Object Array
  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

  getToken(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post(this.tokenUrl, { headers }).subscribe(
      (response) => {
        this.tokenObject = response;
        this.getPublication(this.tokenObject.access_token)
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );

  }

}
