import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsDetail } from '../models/news-detail';
import { InsuranceService } from '../services/insurance.service';
import { InsuranceDetail } from '../models/insurance-detail';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  private dailyNews: NewsDetail[];
  private insurances: InsuranceDetail[];
  constructor(
    private newsService: NewsService,
    private insuranceService: InsuranceService
  ) { }

  ngOnInit() {
    this.getDailyNews();
    this.getInsurances();
  }

  getDailyNews() {
    this.newsService.dailyNewsCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.dailyNews =  response['news'];
        } else {
          alert('Failed to load News/Offers');
        }
      }
    );
  }

  getInsurances() {
    this.insuranceService.insurancesCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.insurances = response['insurances'];
        } else {
          alert('Failed to Insurances');
        }
      }
    );
  }

}
