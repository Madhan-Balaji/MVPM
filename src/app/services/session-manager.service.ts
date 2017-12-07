import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SessionManagerService {
  private baseUrl = 'http://localhost:8080/carshop/Jserv/';
  private serviceSpecificUrl = this.baseUrl + 'control/';

  private signinUrl = this.serviceSpecificUrl + 'userLogin';
  private signupUrl = this.serviceSpecificUrl + 'newUser';

  constructor(
    private http: HttpClient
  ) { }

  signinCall(email, password) {
    const bodyHard = new URLSearchParams();
    bodyHard.set('mail', email);
    bodyHard.set('pwd', password);
    const body = bodyHard.toString();
    return this.http.post(this.signinUrl, body, { headers: new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded') });
  }
}
