import { Component, OnInit } from '@angular/core';
import { LoanDetail } from '../models/loan-detail';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-write-loan',
  templateUrl: './write-loan.component.html',
  styleUrls: ['./write-loan.component.css']
})
export class WriteLoanComponent implements OnInit {
  newLoan: LoanDetail = {};
  loanControl: LoanDetail;
  constructor(
    private loanService: LoanService
  ) {
    this.newLoan.brand = '';
  }

  ngOnInit() {
    this.loadAllLoans();
  }

  NewLoanSubmit() {
    this.loanService.addNewLoanCall(this.newLoan).subscribe(
      response => {
        if (response === 'success') {
          alert('Loan Details Uploaded Successfully!');
          this.loadAllLoans();
        } else {
          alert('Problem in uploading loan, Please try later!');
        }
      }
    );
  }

  loadAllLoans() {
    this.loanService.getAllLoansCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.loanControl = response['loans'];
        }
      }
    );
  }

  removeLoan(id) {
    if (confirm('Delete the Loan?')) {
      this.loanService.removeLoanCall(id).subscribe(
        response => {
          if (response === 'success') {
            this.loadAllLoans();
          } else {
            alert('Problem with removal, Please try later!');
          }
        }
      );
    }
  }
}
