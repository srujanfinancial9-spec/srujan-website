import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenObject } from './models/token.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'srujan-financial';
  tokenUrl = "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-ripez/auth/providers/anon-user/login";
  botStatusUrl = "https://us-east-1.aws.data.mongodb-api.com/app/application-0-ripez/endpoint/getChatBotStatus"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response!:any;
  show!:boolean;

  constructor(
    private http: HttpClient) {}

  ngOnInit(): void {
     this.getToken()
  }

  getToken() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post<TokenObject>(this.tokenUrl, { headers }).subscribe(
      (response) : void => {
        this.getChatBotStatus(response.access_token)
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }

  getChatBotStatus(token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    this.http.get(this.botStatusUrl,{ headers }).subscribe(
      (response) => {
        this.response = response
        this.show = this.response[0].show
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
}
