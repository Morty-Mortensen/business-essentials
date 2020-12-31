import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {AccountingComponent} from "./views/accounting/accounting.component";
import {MarketingComponent} from "./views/marketing/marketing.component";
import {FinanceComponent} from "./views/finance/finance.component";
import {WhyAccountingComponent} from "./views/accounting/why-accounting/why-accounting.component";
import {AccountingBussinessEssentialsComponent} from "./views/accounting/accounting-bussiness-essentials/accounting-bussiness-essentials.component";
import {AccountingBlogComponent} from "./views/accounting/accounting-blog/accounting-blog.component";


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
        path: 'accounting', component: AccountingComponent,
          children: [
              { path: 'why-accounting', component: WhyAccountingComponent },
              { path: 'accounting-business-essentials', component: AccountingBussinessEssentialsComponent },
              { path: 'accounting-blog', component: AccountingBlogComponent },
          ]
      },
      {
        path: 'marketing', component: MarketingComponent,
          children: [
              { path: 'why-marketing', component: HomeComponent },
              { path: 'marketing-business-essentials', component: HomeComponent },
              { path: 'marketing-blog', component: HomeComponent },
          ]
      },
      {
        path: 'finance', component: FinanceComponent,
          children: [
              { path: 'why-finance', component: HomeComponent },
              { path: 'finance-business-essentials', component: HomeComponent },
              { path: 'finance-blog', component: HomeComponent },
          ]
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
