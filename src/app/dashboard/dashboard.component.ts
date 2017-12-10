import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../services/session-manager.service';
import { DataBridgeService } from '../services/data-bridge.service';
import { CompareService } from '../services/compare.service';
import { UserDetail } from '../models/user-detail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: UserDetail = {};
  constructor(
    private sessionManager: SessionManagerService,
    private dataBridge: DataBridgeService,
    private compareService: CompareService
  ) {
    this.user = this.dataBridge.getAppUser();
  }

  ngOnInit() {
    this.sessionManager.checkRole();
  }

  goCompare() {
    this.compareService.showCarCompare();
  }
  removeCar(car) {
    this.compareService.popACar(car);
  }
}
