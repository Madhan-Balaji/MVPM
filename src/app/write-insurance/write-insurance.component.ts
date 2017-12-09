import { Component, OnInit } from '@angular/core';
import { InsuranceDetail } from '../models/insurance-detail';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-write-insurance',
  templateUrl: './write-insurance.component.html',
  styleUrls: ['./write-insurance.component.css']
})
export class WriteInsuranceComponent implements OnInit {
  newInsurance: InsuranceDetail = {};
  insuranceControl: InsuranceDetail[];
  constructor(
    private insuranceService: InsuranceService
  ) {
    this.newInsurance.claim = '';
    this.newInsurance.own = '';
    this.newInsurance.owner = '';
    this.newInsurance.zDep = '';
    this.newInsurance.lib = '';
    this.newInsurance.cd = '';
  }

  ngOnInit() {
    this.loadAllInsurance();
  }

  loadAllInsurance() {
    this.insuranceService.allInsurancesCall().subscribe(
      response => {
        if (response['status'] === 'success') {
          this.insuranceControl = response['insurances'];
        }
      }
    );
  }

  newInsuranceSubmit() {
    this.insuranceService.addInsuranceCall(this.newInsurance).subscribe(
      response => {
        if (response === 'success') {
          alert('Insurance Posted Successfully!');
          this.loadAllInsurance();
        } else {
          alert('Problem with posting insurance!');
        }
      }
    );
  }

  removeInsurance(id) {
    if (confirm('Delete the insurance?')) {
      this.insuranceService.removeInsuranceCall(id).subscribe(
        response => {
          if (response === 'success') {
            this.loadAllInsurance();
          } else {
            alert('Problem with deleting the insurance');
          }
        }
      );
    }
  }

}
