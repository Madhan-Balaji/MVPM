import { Component, OnInit } from '@angular/core';
import { InsuranceDetail } from '../models/insurance-detail';
import { DataBridgeService } from '../services/data-bridge.service';

@Component({
  selector: 'app-insurance-display',
  templateUrl: './insurance-display.component.html',
  styleUrls: ['./insurance-display.component.css']
})
export class InsuranceDisplayComponent implements OnInit {
  insurance: InsuranceDetail;
  constructor(
    private dataBridge: DataBridgeService
  ) { }

  ngOnInit() {
    this.insurance = this.dataBridge.getInsurance();
  }

}
