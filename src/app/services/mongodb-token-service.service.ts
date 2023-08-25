import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenObj } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class MongodbTokenServiceService {

  tokenUrl = "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-ripez/auth/providers/anon-user/login";
  tokenObject:any

  constructor(private http: HttpClient) { }

  getToken(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    this.http.post(this.tokenUrl, { headers }).subscribe(
      (response) => {
        this.tokenObject = response;
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );

  }
}
