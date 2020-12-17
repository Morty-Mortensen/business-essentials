import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AccountingComponent } from './views/accounting/accounting.component';
import { FinanceComponent } from './views/finance/finance.component';
import { MarketingComponent } from './views/marketing/marketing.component';
import { DotaComponent } from './views/dota/dota.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountingComponent,
    FinanceComponent,
    MarketingComponent,
    DotaComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
