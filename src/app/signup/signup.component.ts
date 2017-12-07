import { Component, OnInit } from '@angular/core';

import { UserDetail } from '../models/user-detail';
import { SessionManagerService } from '../services/session-manager.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: UserDetail;
  rpwd: any;
  constructor(private sessionManager: SessionManagerService) { }

  ngOnInit() {
  }

  signupSubmit() {
    this.sessionManager.signupCall(this.newUser).subscribe(
      response => console.log(response)
    );
  }

}
