import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsuranceService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'insurance/';

  private insurances = this.serviceSpecificUrl + 'getInsurances';
  constructor(private http: HttpClient) { }

  insurancesCall() {
    return this.http.get(this.insurances);
  }
}
