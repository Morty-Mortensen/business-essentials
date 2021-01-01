import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
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
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TitleCasePipe} from "@angular/common";
import { MainImageComponent } from './components/main-image/main-image.component';
import { WhyAccountingComponent } from './views/accounting/why-accounting/why-accounting.component';
import { AccountingBussinessEssentialsComponent } from './views/accounting/accounting-bussiness-essentials/accounting-bussiness-essentials.component';
import { AccountingBlogComponent } from './views/accounting/accounting-blog/accounting-blog.component';
import { AccountingFortuneFivehundredComponent } from './views/accounting/accounting-bussiness-essentials/accounting-fortune-fivehundred/accounting-fortune-fivehundred.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

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
    MainImageComponent,
    WhyAccountingComponent,
    AccountingBussinessEssentialsComponent,
    AccountingBlogComponent,
    AccountingFortuneFivehundredComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
