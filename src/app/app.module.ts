import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RoutingModule } from './/routing.module';
import { SignupComponent } from './signup/signup.component';
import { SessionManagerService } from './services/session-manager.service';
import { DataBridgeService } from './services/data-bridge.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsService } from './services/news.service';
import { InsuranceService } from './services/insurance.service';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    InsuranceDashboardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SessionManagerService, DataBridgeService, NewsService, InsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
