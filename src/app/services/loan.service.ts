import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DataBridgeService } from './data-bridge.service';
import { LoanDetail } from '../models/loan-detail';

@Injectable()
export class LoanService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'loan/';

  private addNewLoan = this.serviceSpecificUrl + 'saveNewLoan';
  private removeLoan = this.serviceSpecificUrl + 'removeLoan';
  private getAllLoans = this.serviceSpecificUrl + 'getAllLoans';
  private loanByBrand = this.serviceSpecificUrl + 'getLoans';
  constructor(
    private http: HttpClient,
    private dataBridge: DataBridgeService
  ) { }

  addNewLoanCall(newLoan: LoanDetail) {
    const loanData = new FormData();
    loanData.append('brand', newLoan.brand);
    loanData.append('bank', newLoan.bank);
    loanData.append('iFrom', newLoan.iFrom);
    loanData.append('iTo', newLoan.iTo);
    loanData.append('fee', newLoan.fee);
    loanData.append('amount', newLoan.amt);
    loanData.append('time', newLoan.time);
    return this.http.post(this.addNewLoan, loanData);
  }

  removeLoanCall(id) {
    return this.http.get(this.removeLoan, { params: new HttpParams().append('id', id) });
  }

  getAllLoansCall() {
    return this.http.get(this.getAllLoans);
  }

  loanByBrandCall(brand) {
    return this.http.get(this.loanByBrand, { params: new HttpParams().set('brand', brand) });
  }

}
