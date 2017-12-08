import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../services/session-manager.service';
import { UserDetail } from '../models/user-detail';
import { DataBridgeService } from '../services/data-bridge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: any;
  user: UserDetail;

  constructor(
    private sessionManager: SessionManagerService,
    private dataBridge: DataBridgeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signinSubmit() {
    this.sessionManager.signinCall(this.email, this.password).subscribe(
      response => {
        if (response['status'] === 'success') {
          this.dataBridge.setAppUser(response['user']);
          this.sessionManager.checkRole();
        }
      }
    );
  }
}
