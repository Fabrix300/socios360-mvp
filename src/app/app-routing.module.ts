import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvestmentDetailComponent } from './investment-detail/investment-detail.component';
import { BusinessComponent } from './business/business.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { MyInvestmentsComponent } from './my-investments/my-investments.component';
import { MyTransactionsComponent } from './my-transactions/my-transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'main', redirectTo: 'main/home', pathMatch: 'full' },
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'investments', component: InvestmentsComponent },
      { path: 'investments/:investmentId', component: InvestmentDetailComponent },
      { path: 'my-investments', component: MyInvestmentsComponent },
      { path: 'my-transactions', component: MyTransactionsComponent }
    ]
  },
  { path: 'business', redirectTo: 'business/home', pathMatch: 'full' },
  { 
    path: 'business', 
    component: BusinessComponent,
    children: [
      { path: 'home', component: BusinessHomeComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
