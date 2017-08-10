import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
// import { AuthModule } from 'angular2-auth';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AccueilComponent } from './accueil/index';
import { InscriptionComponent } from './inscription/index';
import { ContactComponent } from './contact/index';
import { NavComponent } from './nav/index';
import { FooterComponent } from './footer/index';
import { LoginComponent } from './login/index';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AlertComponent,
    AccueilComponent,
    InscriptionComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    //AuthModule.forRoot(),
    routing
  ],
  providers: [
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService
  ]
})

export class AppModule {}