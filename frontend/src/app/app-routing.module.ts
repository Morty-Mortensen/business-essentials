import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {AccountingComponent} from "./views/accounting/accounting.component";
import {MarketingComponent} from "./views/marketing/marketing.component";
import {FinanceComponent} from "./views/finance/finance.component";


const routes: Routes =
    [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'accounting', component: AccountingComponent
      },
      {
        path: 'marketing', component: MarketingComponent
      },
      {
        path: 'finance', component: FinanceComponent
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
