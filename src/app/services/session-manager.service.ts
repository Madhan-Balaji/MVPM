import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SessionManagerService {
  private baseUrl = "http://localhost:8080/carshop/Jserv/";
  private serviceSpecificUrl = this.baseUrl + "control/";

  private signinUrl = this.serviceSpecificUrl + "userLogin";
  private signupUrl = this.serviceSpecificUrl + "newUser";

  constructor(
    private http: HttpClient
  ) { }

  signinCall(email, password) {
    let body = new URLSearchParams();
    body.set("mail",email);
    body.set("pwd", password);
    return this.http.post(this.signinUrl, body.toString(), {headers: new HttpHeaders().set("Content-type","application/x-www-form-urlencoded")});
  }
}
