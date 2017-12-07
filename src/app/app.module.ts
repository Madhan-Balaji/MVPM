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



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SessionManagerService, DataBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
