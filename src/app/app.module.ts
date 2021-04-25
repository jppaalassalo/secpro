import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Using external aythentication
import { AuthModule } from '@auth0/auth0-angular';
// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import { environment } from '../environments/environment';
//import { LoggingHttpInterceptor } from './logger';


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
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      audience: environment.auth.audience,
      scope: 'read:users',
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://YOUR_DOMAIN/api/v2/' (note the asterisk)
            uri: environment.apiUrl+'/api/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: environment.auth.audience,
    
              // The attached token should have these scopes
              scope: 'read:users'
            }
          }
        ],
      },
    }),
  ],
  providers: [
   //{ provide: HTTP_INTERCEPTORS, useClass: LoggingHttpInterceptor, multi: true } ,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
