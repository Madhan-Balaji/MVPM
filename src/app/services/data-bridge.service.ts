import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail';
import { CarDetail } from '../models/car-detail';
import { Router } from '@angular/router';
import { NewsDetail } from '../models/news-detail';
import { InsuranceDetail } from '../models/insurance-detail';

@Injectable()
export class DataBridgeService {
  private appUser: UserDetail;
  private showCar: CarDetail;
  private loanBrand;
  private news: NewsDetail;
  private insurance: InsuranceDetail;
  constructor(
    private router: Router
  ) { }

  setAppUser(userDetail: UserDetail) {
    this.appUser = userDetail;
  }

  getAppUser() {
    return this.appUser;
  }

  setShowCar(car: CarDetail) {
    this.showCar = car;
  }

  getShowCar() {
    return this.showCar;
  }

  getNews() {
    return this.news;
  }
  setNews(news) {
    this.news = news;
  }
  setInsurance(insurance) {
    this.insurance = insurance;
  }
  getInsurance() {
    return this.insurance;
  }

  setLoanBrand(car: CarDetail) {
    this.loanBrand = car.brand;
    this.router.navigate(['/dashboard/loans']);
  }

  getLoanBrand() {
    return this.loanBrand;
  }

  viewCarDetails(car: CarDetail) {
    this.setShowCar(car);
    this.router.navigate(['/dashboard/car-details']);
  }

  viewNews(news) {
    this.setNews(news);
    this.router.navigate(['/dashboard/news']);
  }

  viewInsurance(insurance) {
    this.setInsurance(insurance);
    this.router.navigate(['/dashboard/insurance-details']);
  }
}
