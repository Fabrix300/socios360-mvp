import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//import { Usuarios } from '../assets/data/db';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormIComponent } from './components/register-form-i/register-form-i.component';
import { RegisterFormBComponent } from './components/register-form-b/register-form-b.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvestmentCardComponent } from './components/investment-card/investment-card.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { BusinessComponent } from './business/business.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { ToastComponent } from './components/toast/toast.component';
import { AlertComponent } from './components/alert/alert.component';
import { RechargeBalanceComponent } from './components/recharge-balance/recharge-balance.component';
import { InvestInProposalComponent } from './components/invest-in-proposal/invest-in-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarHomeComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFormIComponent,
    RegisterFormBComponent,
    NavbarTopComponent,
    HomeComponent,
    InvestmentsComponent,
    NotFoundComponent,
    InvestmentCardComponent,
    InvestmentDetailComponent,
    BusinessComponent,
    BusinessHomeComponent,
    ToastComponent,
    AlertComponent,
    RechargeBalanceComponent,
    InvestInProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
