import { Injectable } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'cars/';

  private sellUsedCar = this.serviceSpecificUrl + 'newUsedCar';
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
    return this.http.post(this.sellUsedCar, fd/*, { headers: new HttpHeaders().set('Content-type', 'multipart/form-data') }*/);
  }
}
