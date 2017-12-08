import { Component, OnInit } from '@angular/core';

import { UserDetail } from '../models/user-detail';
import { SessionManagerService } from '../services/session-manager.service';
import { DataBridgeService } from '../services/data-bridge.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: UserDetail = {};

  constructor(
    private sessionManager: SessionManagerService,
    private dataBridge: DataBridgeService
  ) {
    this.newUser.region = '';
  }

  ngOnInit() {
  }

  signupSubmit() {
    this.sessionManager.signupCall(this.newUser).subscribe(
      response => {
        if (response['status'] === 'success') {
          this.dataBridge.setAppUser(response['user']);
          this.sessionManager.checkRole();
        } else {
          alert('Problem with Sign Up, Please try later');
        }
      }
    );
  }

}
