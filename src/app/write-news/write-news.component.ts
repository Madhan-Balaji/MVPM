import { Component, OnInit } from '@angular/core';
import { NewsDetail } from '../models/news-detail';
import * as $ from 'jquery';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-write-news',
  templateUrl: './write-news.component.html',
  styleUrls: ['./write-news.component.css']
})
export class WriteNewsComponent implements OnInit {
  newNews: NewsDetail = {};
  newsControl: NewsDetail[];

  constructor(
    private newService: NewsService
  ) { }

  ngOnInit() {
    this.loadAllNews();
  }

  newsFormSubmit() {
    const image = $('#myFile').prop('files');
    this.newService.addNewsCall(this.newNews, image[0]).subscribe(
      response => {
        if (response === 'success') {
          alert('News Posted Successfully!');
          this.loadAllNews();
        } else {
          alert('Problem with posting the news');
        }
      }
    );
  }

  loadAllNews() {
    this.newService.getAllNewsCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.newsControl = response['news'];
        } else {
          alert('Problem with loading the loan data');
        }
      }
    );
  }

  removeNews(id) {
    if (confirm('Delete the News?')) {
      this.newService.removeNewsCall(id).subscribe(
        response => {
          if (response === 'success') {
            this.loadAllNews();
          }
        }
      );
    }
  }
}
