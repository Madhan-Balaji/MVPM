import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../services/session-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sessionManager: SessionManagerService
  ) { }

  ngOnInit() {
    this.sessionManager.checkRole();
  }

}
