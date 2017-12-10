import { Injectable } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { Router } from '@angular/router';

@Injectable()
export class CompareService {
  compareCars: CarDetail[] = [];
  constructor(
    private router: Router
  ) { }
  setCompareCars(cars: CarDetail) {
    if (this.compareCars.length === 3) {
      alert('Maximum only 3 can be compared');
    } else if (this.findAlreadyExist(cars)) {
      alert('The Car already available for comparision!');
    } else {
      this.compareCars.push(cars);
    }
  }
  findAlreadyExist(car: CarDetail) {
    let result = false;
    for (let i = 0; i < this.compareCars.length; i++) {
      if (this.compareCars[i] === car) {
        result = true;
        break;
      }
    }
    return result;
  }
  popACar(car) {
    let index;
    for (let i = 0; i < this.compareCars.length; i++) {
      if (this.compareCars[i] === car) {
        index = i;
        break;
      }
    }
    this.compareCars.splice(index, 1);
  }
  getCompareCars() {
    return this.compareCars;
  }
  showCarCompare() {
    this.router.navigate(['/dashboard/compare']);
  }
  clear() {
    this.compareCars = [];
  }
}
