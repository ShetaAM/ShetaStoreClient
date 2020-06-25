import { AuthService } from './service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './SharedComponent/site-header/site-header.component';
import { SiteFooterComponent } from './SharedComponent/site-footer/site-footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { SiteHeaderBanerComponent } from './SharedComponent/site-header-baner/site-header-baner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    SiteHeaderBanerComponent,
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
