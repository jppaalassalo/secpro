import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Using external aythentication
import { AuthModule } from '@auth0/auth0-angular';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AuthModule.forRoot({
      domain: 'dev-954htudt.eu.auth0.com',
      clientId: 'Fld14AtRZmT36HY83wheItnE2fokt2hB'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
