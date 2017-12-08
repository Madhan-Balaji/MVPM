import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewsDetail } from '../models/news-detail';

@Injectable()
export class NewsService {

  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'news/';

  private dailyNews = this.serviceSpecificUrl + 'getStarterNews';
  private addNews = this.serviceSpecificUrl + 'saveNewNews';
  private removeNews = this.serviceSpecificUrl + 'removeNews';
  private getAllNews = this.serviceSpecificUrl + 'getAllNews';

  constructor(private http: HttpClient) { }

  dailyNewsCall() {
    return this.http.get(this.dailyNews);
  }

  addNewsCall(newNews: NewsDetail, file) {
    const fd = new FormData();
    fd.append('head', newNews.heading);
    fd.append('content', newNews.content);
    fd.append('file', file);
    return this.http.post(this.addNews, fd);
  }

  removeNewsCall(id) {
    return this.http.get(this.removeNews, { params: new HttpParams().append('id', id) });
  }

  getAllNewsCall() {
    return this.http.get(this.getAllNews);
  }
}
