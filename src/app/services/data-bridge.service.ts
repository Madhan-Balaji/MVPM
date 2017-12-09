import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail';
import { CarDetail } from '../models/car-detail';
import { Router } from '@angular/router';

@Injectable()
export class DataBridgeService {
  private appUser: UserDetail;
  private showCar: CarDetail;
  private loanBrand;
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
}
