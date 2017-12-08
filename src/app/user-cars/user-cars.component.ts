import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { CarDetail } from '../models/car-detail';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {
  cars: CarDetail[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loadAllUserCars();
  }

  loadAllUserCars() {
    this.carService.userCarsCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.cars = response['cars'];
        } else {
          alert('Problem in loading car details!');
        }
      }
    );
  }

  removeCar(id) {
    if (confirm('Delete the Car?')) {
      this.carService.removeCarCall(id).subscribe(
        response => {
          if (response === 'success') {
            this.loadAllUserCars();
          }
        }
      );
    }
  }


}
