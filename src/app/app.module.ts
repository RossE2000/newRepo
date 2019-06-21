import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { SettingsComponent } from './settings/settings.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    SettingsComponent,
    MyPurchasesComponent,
    MyAccountComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'userLogin', component: UserLoginComponent},
      {path: 'myAccount', component: MyAccountComponent},
      {path: 'myPurchases', component: MyPurchasesComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
