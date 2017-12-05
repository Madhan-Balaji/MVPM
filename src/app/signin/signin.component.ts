import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../services/session-manager.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: any;

  constructor(private sessionManager: SessionManagerService) { }

  ngOnInit() {
  }

  signinSubmit() {
    this.sessionManager.signinCall(this.email,this.password).subscribe();
  }
}
