import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { DataBridgeService } from '../services/data-bridge.service';
import { CarDetail } from '../models/car-detail';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cars: CarDetail[] = [];
  filterFuel: any[] = [];
  filterUsage: any[] = [];
  searchTerm = '';
  used;
  newv;
  petrol;
  diesel;
  electric;
  cng;
  holder: CarDetail[] = [];
  constructor(
    private carService: CarService,
    private dataBridge: DataBridgeService,
    private compareService: CompareService
  ) {
    this.used = false;
    this.newv = false;
    this.petrol = false;
    this.diesel = false;
    this.electric = false;
    this.cng = false;
    this.loadAllCars();
  }

  ngOnInit() {
  }

  checkUsageAlreadyExist(usage) {
    let result = true;
    for (let i = 0; i < this.filterUsage.length; i++) {
      if (this.filterUsage[i] === usage) {
        result = false;
        break;
      }
    }
    return result;
  }

  checkFuelAlreadyExist(fuel) {
    let result = true;
    for (let i = 0; i < this.filterFuel.length; i++) {
      if (this.filterFuel[i] === fuel) {
        result = false;
        break;
      }
    }
    return result;
  }

  getIndexUsageFilter(usage) {
    let index;
    for (let i = 0; i < this.filterUsage.length; i++) {
      if (this.filterUsage[i] === usage) {
        index = i;
        break;
      }
    }
    return index;
  }

  getIndexFuelFilter(fuel) {
    let index;
    for (let i = 0; i < this.filterFuel.length; i++) {
      if (this.filterFuel[i] === fuel) {
        index = i;
        break;
      }
    }
    return index;
  }

  updateFilter() {
    // Adding and removing usage from filter
    if (this.used === true) {
      if (this.checkUsageAlreadyExist('used')) {
        this.filterUsage.push('used');
      }
    } else {
      if (!this.checkUsageAlreadyExist('used')) {
        this.filterUsage.splice(this
          .getIndexUsageFilter('used'), 1);
      }
    }
    if (this.newv === true) {
      if (this.checkUsageAlreadyExist('new')) {
        this.filterUsage.push('new');
      }
    } else {
      if (!this.checkUsageAlreadyExist('new')) {
        this.filterUsage.splice(this
          .getIndexUsageFilter('new'), 1);
      }
    }

    // Adding and Removing Fuel from filter
    if (this.petrol === true) {
      if (this.checkFuelAlreadyExist('pertrol')) {
        this.filterFuel.push('pertrol');
      }
    } else {
      if (!this.checkFuelAlreadyExist('pertrol')) {
        this.filterFuel.splice(this
          .getIndexFuelFilter('pertrol'), 1);
      }
    }
    if (this.diesel === true) {
      if (this.checkFuelAlreadyExist('diesel')) {
        this.filterFuel.push('diesel');
      }
    } else {
      if (!this.checkFuelAlreadyExist('diesel')) {
        this.filterFuel.splice(this
          .getIndexFuelFilter('diesel'), 1);
      }
    }
    if (this.cng === true) {
      if (this.checkFuelAlreadyExist('cng')) {
        this.filterFuel.push('cng');
      }
    } else {
      if (!this.checkFuelAlreadyExist('cng')) {
        this.filterFuel.splice(this
          .getIndexFuelFilter('cng'), 1);
      }
    }
    if (this.electric === true) {
      if (this.checkFuelAlreadyExist('electric')) {
        this.filterFuel.push('electric');
      }
    } else {
      if (!this.checkFuelAlreadyExist('electric')) {
        this.filterFuel.splice(this
          .getIndexFuelFilter('electric'), 1);
      }
    }
    this.applyFilter();
  }

  applyFilter() {
    let usageFilter = [];
    let finalFilter = [];
    if (this.filterUsage.length > 0) {
      for (let i = 0; i < this.holder.length; i++) {
        for (let j = 0; j < this.filterUsage.length; j++) {
          if (this.holder[i].usage === this.filterUsage[j]) {
            usageFilter.push(this.holder[i]);
          }
        }
      }
    } else {
      usageFilter = this.holder;
    }
    if (this.filterFuel.length > 0) {
      for (let i = 0; i < usageFilter.length; i++) {
        for (let j = 0; j < this.filterFuel.length; j++) {
          if (usageFilter[i].fuel === this.filterFuel[j]) {
            finalFilter.push(usageFilter[i]);
          }
        }
      }
    } else {
      finalFilter = usageFilter;
    }
    this.cars = finalFilter;

  }

  searchTheTerm() {
    this.carService.searchCarCall(this.searchTerm).subscribe(
      response => {
        if (response['status'] === 'success') {
          this.holder = response['cars'];
          this.applyFilter();
        }
      }
    );
  }

  initcap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  loadAllCars() {
    this.carService.getAllCarsCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.holder = response['cars'];
          this.cars = response['cars'];
        }
      }
    );
  }

  selectCar(car: CarDetail) {
    this.dataBridge.viewCarDetails(car);
  }

  addCompare(car) {
    this.compareService.setCompareCars(car);
  }
}
