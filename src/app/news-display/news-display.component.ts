import { Component, OnInit } from '@angular/core';
import { NewsDetail } from '../models/news-detail';
import { DataBridgeService } from '../services/data-bridge.service';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {
  news: NewsDetail;
  constructor(
    private dataBridge: DataBridgeService
  ) { }

  ngOnInit() {
    this.news = this.dataBridge.getNews();
  }

}
