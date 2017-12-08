import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserDetail } from '../models/user-detail';
import { DataBridgeService } from './data-bridge.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionManagerService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'control/';

  private signinUrl = this.serviceSpecificUrl + 'userLogin';
  private signupUrl = this.serviceSpecificUrl + 'newUser';

  constructor(
    private http: HttpClient,
    private dataBridge: DataBridgeService,
    private route: Router
  ) { }

  signinCall(email, password) {
    const bodyHard = new URLSearchParams();
    bodyHard.set('mail', email);
    bodyHard.set('pwd', password);
    const body = bodyHard.toString();
    return this.http.post(this.signinUrl, body, { headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded') });
  }

  signupCall(newUser: UserDetail) {
    const bodyHard = new URLSearchParams();
    bodyHard.set('name', newUser.name);
    bodyHard.set('pwd', newUser.password);
    bodyHard.set('email', newUser.email);
    bodyHard.set('region', newUser.region);
    bodyHard.set('phone', newUser.phone.toString());
    const body = bodyHard.toString();
    return this.http.post(this.signupUrl, body, { headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded') });
  }

  checkRole() {
    let user: UserDetail;
    user = this.dataBridge.getAppUser();
    if (user.role === 'user') {
      this.route.navigate(['/dashboard/user']);
    } else if (user.role === 'admin') {
      this.route.navigate(['/dashboard/admin']);
    } else if (user.role === 'insurance') {
      this.route.navigate(['/dashboard/insurance']);
    }
  }
}
