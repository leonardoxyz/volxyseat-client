import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { CookiepopupComponent } from './components/cookiepopup/cookiepopup.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubscriptionService } from './services/Subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SubscriptionComponent,
    CookiepopupComponent,
    AboutComponent,
    FooterComponent,
    PaymentComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule

  ],
  providers: [SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
