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
import { HeaderComponent } from './components/header/header.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { ArticleDisplayBoxComponent } from './components/main-page/article-display-box/article-display-box.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { UserInformationCardComponent } from './components/user-information-card/user-information-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountingComponent,
    FinanceComponent,
    MarketingComponent,
    DotaComponent,
    FooterComponent,
    HeaderComponent,
    MainNavigationComponent,
    SubNavigationComponent,
    ArticleDisplayBoxComponent,
    RegisterComponent,
    LoginComponent,
    UserInformationCardComponent,
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
