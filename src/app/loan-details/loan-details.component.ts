import { Component, OnInit } from '@angular/core';
import { LoanDetail } from '../models/loan-detail';
import { LoanService } from '../services/loan.service';
import { DataBridgeService } from '../services/data-bridge.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loans: LoanDetail[];
  constructor(
    private loanService: LoanService,
    private dataBridge: DataBridgeService
  ) { }

  ngOnInit() {
    this.loadLoans();
  }

  loadLoans() {
    const brand = this.dataBridge.getLoanBrand();
    this.loanService.loanByBrandCall(brand).subscribe(
      response => {
        if (response['status'] === 'success') {
          this.loans = response['loans'];
        } else {
          alert('No Loan offered for this brand!');
        }
      }
    );
  }

}
