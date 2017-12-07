import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user-detail';

@Injectable()
export class DataBridgeService {
  private appUser: UserDetail;
  constructor() { }

  setAppUser(userDetail: UserDetail) {
    this.appUser = userDetail;
  }

  getAppUser() {
    return this.appUser;
  }
}
