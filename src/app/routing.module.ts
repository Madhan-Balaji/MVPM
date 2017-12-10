import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { InsuranceDashboardComponent } from './insurance-dashboard/insurance-dashboard.component';
import { SellUsedCarComponent } from './sell-used-car/sell-used-car.component';
import { SellNewCarComponent } from './sell-new-car/sell-new-car.component';
import { WriteNewsComponent } from './write-news/write-news.component';
import { WriteLoanComponent } from './write-loan/write-loan.component';
import { UserCarsComponent } from './user-cars/user-cars.component';
import { WriteInsuranceComponent } from './write-insurance/write-insurance.component';
import { SearchComponent } from './search/search.component';
import { CarDisplayComponent } from './car-display/car-display.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { NewsDisplayComponent } from './news-display/news-display.component';
import { InsuranceDisplayComponent } from './insurance-display/insurance-display.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: '/dashboard/user', pathMatch: 'full' },
      { path: 'user', component: UserDashboardComponent },
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'insurance', component: InsuranceDashboardComponent },
      { path: 'sell-used-car', component: SellUsedCarComponent },
      { path: 'sell-new-car', component: SellNewCarComponent },
      { path: 'news-control', component: WriteNewsComponent },
      { path: 'loan-control', component: WriteLoanComponent },
      { path: 'your-cars', component: UserCarsComponent },
      { path: 'sell-insurance', component: WriteInsuranceComponent },
      { path: 'search', component: SearchComponent },
      { path: 'car-details', component: CarDisplayComponent},
      { path: 'loans', component: LoanDetailsComponent},
      { path: 'news', component: NewsDisplayComponent },
      { path: 'insurance-details', component: InsuranceDisplayComponent },
      { path: 'compare', component: CompareComponent }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
