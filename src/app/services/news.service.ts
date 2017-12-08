import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {

  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'news/';

  private dailyNews = this.serviceSpecificUrl + 'getStarterNews';

  constructor(private http: HttpClient) { }

  dailyNewsCall() {
    return this.http.get(this.dailyNews);
  }
}
