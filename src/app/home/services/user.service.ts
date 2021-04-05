import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' 
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '@auth0/auth0-angular';
import { map, switchMap, tap, take } from 'rxjs/operators';

// User service provides user profile data based on
// app database values and auth0 authentication data.
// From auth0 data user email is used as key 
// to get user nick from app database.
// User nick is assumed to be unique and 
// is used to identify the user within the app.
// User nick is user settable and thus may 
// protect user's identity in other users' views.

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string = environment.baseUrl+'api/users';

  constructor(private http:HttpClient, public auth: AuthService) { }

  //get all users from database
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  } 

  //get nick for authenticated user (or null)
  //need to join two observables to get result:
  //    1. array of users from database
  //    2. authenticated user from auth0 service
  getCurrentUserNick():Observable<String> {
    //this.auth.user$.subscribe(res => console.log(res));
    return this.getUsers().pipe(
      switchMap(users => this.auth.user$.pipe(
        map(authUser => users.find(user => user.email === authUser.email)),
        map(authUser => authUser.userName),
        take(1)
      ))
    ) //.subscribe({next: res => {console.log(res);  }} )
  }
}