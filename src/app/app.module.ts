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
import { SellUsedCarComponent } from './sell-used-car/sell-used-car.component';
import { CarService } from './services/car.service';
import { SellNewCarComponent } from './sell-new-car/sell-new-car.component';
import { WriteNewsComponent } from './write-news/write-news.component';
import { WriteLoanComponent } from './write-loan/write-loan.component';
import { LoanService } from './services/loan.service';
import { UserCarsComponent } from './user-cars/user-cars.component';
import { WriteInsuranceComponent } from './write-insurance/write-insurance.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    InsuranceDashboardComponent,
    DashboardComponent,
    SellUsedCarComponent,
    SellNewCarComponent,
    WriteNewsComponent,
    WriteLoanComponent,
    UserCarsComponent,
    WriteInsuranceComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SessionManagerService, DataBridgeService, NewsService, InsuranceService, CarService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
