import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { DataBridgeService } from '../services/data-bridge.service';
import { CarService } from '../services/car.service';
import { ReviewData } from '../models/review-data';
import { UserReview } from '../models/user-review';

@Component({
  selector: 'app-car-display',
  templateUrl: './car-display.component.html',
  styleUrls: ['./car-display.component.css']
})
export class CarDisplayComponent implements OnInit {
  userReview: UserReview = {};
  data: CarDetail;
  review: ReviewData = {};
  constructor(
    private carService: CarService,
    private dataBridge: DataBridgeService
  ) { }

  ngOnInit() {
    this.data = this.dataBridge.getShowCar();
    this.carService.getReviewsCall(this.data.id).subscribe(
      response => {
        if (response['status'] === 'success') {
          this.review = response;
          this.review.notYet = 'no';
        } else {
          this.review.userReviewed = 'no';
          this.review.notYet = 'yes';
          this.review.notYetMessage = 'No Reviews Yet!';
        }
      }
    );
  }
  initcap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  seeLoans(car: CarDetail) {
    this.dataBridge.setLoanBrand(car);
  }
  reviewSubmit() {
    this.carService.userReviewCall(this.data.id, this.userReview.review, this.userReview.rating).subscribe(
      response => {
        if (response === 'success') {
          this.review.userReviewed = 'yes';
          this.review.notYet = 'no';
          alert('Thanks for reviewing!');
        } else {
          alert('Problem with updating review');
        }
      }
    );
  }
}
