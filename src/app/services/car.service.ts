import { Injectable } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'cars/';

  private sellUsedCar = this.serviceSpecificUrl + 'newUsedCar';
  private sellNewCar = this.serviceSpecificUrl + 'newCar';
  constructor(private http: HttpClient) { }

  sellUsedCarCall(usedCar: CarDetail, file) {
    const fd = new FormData();
    fd.append('price', usedCar.price);
    fd.append('brand', usedCar.brand);
    fd.append('type', usedCar.type);
    fd.append('name', usedCar.name);
    fd.append('model', usedCar.model);
    fd.append('year', usedCar.year);
    fd.append('gear', usedCar.gear);
    fd.append('seat', usedCar.seat);
    fd.append('color', usedCar.color);
    fd.append('owner', usedCar.owner);
    fd.append('fuelType', usedCar.fuel);
    fd.append('milage', usedCar.milage);
    fd.append('cc', usedCar.cc);
    fd.append('address', usedCar.address);
    fd.append('file', file);
    fd.append('user', usedCar.user);
    return this.http.post(this.sellUsedCar, fd);
  }

  sellNewCarCall(newCar: CarDetail, file, video) {
    const fd = new FormData();
    fd.append('price', newCar.price);
    fd.append('brand', newCar.brand);
    fd.append('type', newCar.type);
    fd.append('name', newCar.name);
    fd.append('model', newCar.model);
    fd.append('year', newCar.year);
    fd.append('gear', newCar.gear);
    fd.append('seat', newCar.seat);
    fd.append('color', newCar.color);
    fd.append('owner', newCar.owner);
    fd.append('fuelType', newCar.fuel);
    fd.append('milage', newCar.milage);
    fd.append('cc', newCar.cc);
    fd.append('address', newCar.address);
    fd.append('file', file);
    fd.append('video', video);
    fd.append('user', newCar.user);
    return this.http.post(this.sellNewCar, fd);
  }
}
