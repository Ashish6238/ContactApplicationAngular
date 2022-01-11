import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Contact/register/register.component';
import { UserloginComponent } from './Contact/userlogin/userlogin.component';
import { ContactinfoComponent } from './Contact/contactinfo/contactinfo.component';
import { HomepageComponent } from './Contact/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserloginComponent,
    ContactinfoComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
