import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RegisterComponent } from './auth/register/register.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     AuthModule,
     NgbModule,
     BrowserAnimationsModule,
    //  RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
