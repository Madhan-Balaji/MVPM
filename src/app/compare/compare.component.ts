import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CarDetail } from '../models/car-detail';
import { CompareService } from '../services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  compCars: CarDetail[] = [];
  constructor(
    private compareService: CompareService
  ) {
    this.loadPage();
    this.compCars = this.compareService.getCompareCars();
    this.compareService.clear();
   }

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    let scripting = '';
    for (let i = 0; i < this.compCars.length; i++) {
      scripting += '<div class=\'col-sm-'
        + (12 / this.compCars.length)
        + '\'><img style=\'max-height: 500px;width: 100%;\' src=\''
        + this.compCars[i].imageUrl + '\'></div>';
    }
    $('#cmp-img').append(scripting);
    for (let i = 0; i < this.compCars.length; i++) {
      const brand = this.initcap(this.compCars[i].brand);
      const name = this.initcap(this.compCars[i].name);
      const model = this.initcap(this.compCars[i].model);
      const year = this.initcap(this.compCars[i].year);
      const gear = this.initcap(this.compCars[i].gear);
      const seat = this.initcap(this.compCars[i].seat);
      const type = this.initcap(this.compCars[i].type);
      const color = this.initcap(this.compCars[i].color);
      const owner = this.initcap(this.compCars[i].owner);
      const fuel = this.initcap(this.compCars[i].fuel);
      const milage = this.initcap(this.compCars[i].milage);
      const cc = this.initcap(this.compCars[i].cc);
      const price = this.initcap(this.compCars[i].price);
      $('#heading').append(
        '<th style=\'text-align:center;\'>'
        + this.initcap(brand) + ' '
        + this.initcap(name) + '</th>');
      $('#brand').append(
        '<td style=\'text-align:center;\'>' + brand + '</td>');
      $('#name').append(
        '<td style=\'text-align:center;\'>' + name + '</td>');
      $('#model').append(
        '<td style=\'text-align:center;\'>' + model + '</td>');
      $('#year').append(
        '<td style=\'text-align:center;\'>' + year + '</td>');
      $('#gear').append(
        '<td style=\'text-align:center;\'>' + gear + '</td>');
      $('#seat').append(
        '<td style=\'text-align:center;\'>' + seat + '</td>');
      $('#type').append(
        '<td style=\'text-align:center;\'>' + type + '</td>');
      $('#color').append(
        '<td style=\'text-align:center;\'>' + color + '</td>');
      $('#owner').append(
        '<td style=\'text-align:center;\'>' + owner + '</td>');
      $('#fuel').append(
        '<td style=\'text-align:center;\'>' + fuel + '</td>');
      $('#milage').append(
        '<td style=\'text-align:center;\'>' + milage + '</td>');
      $('#cc').append('<td style=\'text-align:center;\'>' + cc + '</td>');
      $('#price').append(
        '<td style=\'text-align:center;\'>' + price + '</td>');
    }

  }

  initcap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


}
