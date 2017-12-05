import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../services/session-manager.service';
import { UserDetail } from '../models/user-detail';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: any;
  user: UserDetail;

  constructor(private sessionManager: SessionManagerService) { }

  ngOnInit() {
  }

  signinSubmit() {
    this.sessionManager.signinCall(this.email, this.password).subscribe(
      resp => {
        if (resp['status'] == 'success') {
          this.user = resp['user'];
          console.log(this.user);
        }
      }
    );
  }
}
