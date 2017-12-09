import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InsuranceDetail } from '../models/insurance-detail';
import { DataBridgeService } from './data-bridge.service';

@Injectable()
export class InsuranceService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'insurance/';

  private insurances = this.serviceSpecificUrl + 'getInsurances';
  private allInsurances = this.serviceSpecificUrl + 'getAllInsurance';
  private addInsurance = this.serviceSpecificUrl + 'saveNewInsurance';
  private removeInsurance = this.serviceSpecificUrl + 'removeInsurance';
  constructor(
    private http: HttpClient,
    private dataBridge: DataBridgeService
  ) { }

  insurancesCall() {
    return this.http.get(this.insurances);
  }

  allInsurancesCall() {
    return this.http.get(this.allInsurances, {params: new HttpParams().set('user', this.dataBridge.getAppUser().id)});
  }

  addInsuranceCall(newInsurance: InsuranceDetail) {
    const body = new URLSearchParams();
    body.append('name', newInsurance.name);
    body.append('val', newInsurance.val);
    body.append('prem', newInsurance.prem);
    body.append('zDep', newInsurance.zDep);
    body.append('claim', newInsurance.claim);
    body.append('own', newInsurance.own);
    body.append('owner', newInsurance.owner);
    body.append('lib', newInsurance.lib);
    body.append('cd', newInsurance.cd);
    body.append('postBy', this.dataBridge.getAppUser().id);
    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.addInsurance, body.toString(), options);
  }

  removeInsuranceCall(id) {
    const body = new URLSearchParams();
    body.set('id', id);
    const options = {
      headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.removeInsurance, body.toString(), options);
  }

}
