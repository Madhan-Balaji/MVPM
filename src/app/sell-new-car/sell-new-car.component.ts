import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { CarService } from '../services/car.service';

import * as $ from 'jquery';
import { DataBridgeService } from '../services/data-bridge.service';

@Component({
  selector: 'app-sell-new-car',
  templateUrl: './sell-new-car.component.html',
  styleUrls: ['./sell-new-car.component.css']
})
export class SellNewCarComponent implements OnInit {
  newCar: CarDetail = {};

  constructor(
    private carService: CarService,
    private dataBridge: DataBridgeService
  ) {
    this.newCar.brand = '';
    this.newCar.color = '';
    this.newCar.fuel = '';
    this.newCar.owner = '';
    this.newCar.type = '';
    this.newCar.user = this.dataBridge.getAppUser().id;
  }

  ngOnInit() {
  }

  sellNewCarSubmit() {
    const files = $('#myFile').prop('files');
    const video = $('#videoFile').prop('files');
    this.carService.sellNewCarCall(this.newCar, files[0], video[0]).subscribe(
      response => {
        if (response['status'] === 'success') {
          alert('Car details posted successfully');
        } else {
          alert('Problem in posting car details, Please try later');
        }
      }
    );
  }
}
