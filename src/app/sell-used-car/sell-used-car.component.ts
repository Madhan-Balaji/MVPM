import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { CarService } from '../services/car.service';

import * as $ from 'jquery';
import { DataBridgeService } from '../services/data-bridge.service';

@Component({
  selector: 'app-sell-used-car',
  templateUrl: './sell-used-car.component.html',
  styleUrls: ['./sell-used-car.component.css']
})
export class SellUsedCarComponent implements OnInit {
  usedCar: CarDetail = {};

  constructor(
    private carService: CarService,
    private dataBridge: DataBridgeService
  ) {
    this.usedCar.brand = '';
    this.usedCar.color = '';
    this.usedCar.fuel = '';
    this.usedCar.owner = '';
    this.usedCar.type = '';
    this.usedCar.user = this.dataBridge.getAppUser().id;
  }

  ngOnInit() {
  }

  sellUsedCarSubmit() {
    const files = $('#myFile').prop('files');
    this.carService.sellUsedCarCall(this.usedCar, files[0]).subscribe(
      response => console.log(response)
    );
  }
}
